import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) { }

  handleSubmit() {
    if (!this.loginForm.valid) return;
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username && password) {
      this.authService.login(username, password).subscribe(
        () => this.router.navigate(['/'])
      );
    }
  }
}