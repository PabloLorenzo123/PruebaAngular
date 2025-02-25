import { Component, signal } from '@angular/core';
import { MatIconService } from '../../services/mat-icon-service.service'; // Import the service
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'botton-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './botton-navbar.component.html',
  styleUrl: './botton-navbar.component.scss'
})
export class BottonNavbarComponent {

  selectedIcon = signal<string>('');

  icons: { [key: string]: string } = {
    'profile-icon': 'icons/profile.svg',
    'gift-icon': 'icons/gift.svg',
    'bell-icon': 'icons/bell.svg',
    'chat-icon': 'icons/chat.svg',
  };

  constructor(private matIconService: MatIconService) {
    // Register the icons using the service
    this.matIconService.registerIcons(this.icons);
    this.selectedIcon.set(this.getIconNames()[0]);
  }

  selectIcon(icon: string){
    this.selectedIcon.set(icon);
  }
  
  getIconNames(){
    return Object.keys(this.icons);
  }
}
