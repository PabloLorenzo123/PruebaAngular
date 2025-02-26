import { Component, computed, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-navigation-bar',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class TopNavigationBarComponent {
  user = computed(() => this.authService.getUser());

  constructor(private authService: AuthService, private router: Router) { }

  getProfileImageUrl() {
    return `http://localhost:3000/uploads/${this.user()?.profilePic}`
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}