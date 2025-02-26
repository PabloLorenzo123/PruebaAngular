import { Component, computed, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { MatIconService } from '../../services/mat-icon-service.service';
import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router';


@Component({
  selector: 'top-navigation-bar',
  imports: [TitleCasePipe, MatIconModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class TopNavigationBarComponent {
  user = computed(() => this.authService.getUser());
  navTabs = signal([
    {title: 'Mis Datos', icon: 'circle-user-icon', iconPath: '/icons/circle-user.svg'},
    {title: 'Reclamos', icon: 'exclamation-icon', iconPath: '/icons/exclamation.svg'},
    {title: 'Pagos', icon: 'credit-card-icon', iconPath: '/icons/credit-card.svg'}
  ])

  constructor(
    private authService: AuthService,
    private router: Router,
    private matIconService: MatIconService) {
      // Register the svgs.
      this.navTabs().forEach(t => {
        this.matIconService.registerIcon(t.icon, t.iconPath);
      })
    }

  getProfileImageUrl() {
    return `http://localhost:3000/uploads/${this.user()?.profilePic}`
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}