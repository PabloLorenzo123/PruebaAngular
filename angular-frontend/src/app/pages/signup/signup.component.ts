import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../model/user.type';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.email),
    password: new FormControl<string>('', Validators.required),
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })
  profilePic = signal<File | string>('');

  constructor(private authService: AuthService, private router: Router) { }

  handleSubmit() {
    if (!this.signupForm.valid) return;

    const { username, email, password, firstName, lastName } = this.signupForm.value;

    if (username && password && firstName && lastName && email) {
      const data: User = { username, password, firstName, lastName, email, profilePic: '' }
      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      })

      if (this.profilePic()) {
        formData.append('profilePic', this.profilePic());
      }

      this.authService.signUp(formData).subscribe(() => this.router.navigate(['/']));
    }
  }

  handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.profilePic.set(input.files[0]);
    }
  }
}