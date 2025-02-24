import { Component } from '@angular/core';
import { TopNavigationBarComponent } from '../../components/top-navigation-bar/top-navigation-bar.component';

import { CoveragesComponent } from '../../components/coverages/coverages.component';
import { DiscoverComponent } from '../../components/discover/discover.component';
import { BottonNavbarComponent } from '../../components/botton-navbar/botton-navbar.component';

@Component({
  selector: 'app-profile',
  imports: [TopNavigationBarComponent, CoveragesComponent, DiscoverComponent, BottonNavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: []
})
export class ProfileComponent {

}
