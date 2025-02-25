import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update(prev => !prev);
  }

}
