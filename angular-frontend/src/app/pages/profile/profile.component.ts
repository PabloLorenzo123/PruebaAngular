import { Component } from '@angular/core';
import { TopNavigationBarComponent } from '../../components/top-navigation-bar/top-navigation-bar.component';
import { CoveragesComponent } from '../../components/coverages/coverages.component';
import { CoveragesService } from '../../services/coverages.service';

@Component({
  selector: 'app-profile',
  imports: [TopNavigationBarComponent, CoveragesComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [CoveragesService]
})
export class ProfileComponent {

}
