import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../services/auth.service';
import { MatIconService } from '../../services/mat-icon-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [NgClass, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = signal<boolean>(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private matIconService: MatIconService,
  ) {
    this.matIconService.registerIcon('navbar-icon', '/icons/navbar.svg');
  }

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
