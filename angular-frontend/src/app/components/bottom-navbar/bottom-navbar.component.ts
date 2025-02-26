import { Component, signal } from '@angular/core';
import { MatIconService } from '../../services/mat-icon-service.service'; // Import the service
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'botton-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.scss'
})
export class BottonNavbarComponent {

  selectedIcon = signal<string>('');
  navTabs = signal([
    {title: 'Perfil', icon: 'profile-icon', iconPath: '/icons/profile.svg'},
    {title: 'Regalos', icon: 'gift-icon', iconPath: '/icons/gift.svg'},
    {title: 'Notificaciones', icon: 'bell-icon', iconPath: '/icons/bell.svg'},
    {title: 'Mensajes', icon: 'chat-icon', iconPath: '/icons/chat.svg'}
  ]);

  constructor(private matIconService: MatIconService) {
    // Register the icons using the service
    this.navTabs().forEach(t => {
      this.matIconService.registerIcon(t.icon, t.iconPath);
    })
    this.selectedIcon.set(this.navTabs()[0].title);
  }

  selectIcon(icon: string){
    this.selectedIcon.set(icon);
  }
  
}
