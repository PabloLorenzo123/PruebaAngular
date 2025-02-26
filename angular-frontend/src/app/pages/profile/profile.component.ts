import { Component } from '@angular/core';
import { TopNavigationBarComponent } from '../../components/user-info/user-info.component';

import { ProductList } from '../../components/product-list/product-list.component';
import { DiscoverComponent } from '../../components/discover/discover.component';
import { BottonNavbarComponent } from '../../components/bottom-navbar/bottom-navbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, TopNavigationBarComponent, ProductList, DiscoverComponent, BottonNavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: []
})
export class ProfileComponent {

}
