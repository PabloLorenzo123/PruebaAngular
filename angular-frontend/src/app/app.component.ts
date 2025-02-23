import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigationBarComponent } from './components/top-navigation-bar/top-navigation-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-frontend';
}
