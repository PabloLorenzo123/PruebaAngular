import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: 'perfil',
        component: ProfileComponent,
        title: 'Perfil',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Log in'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Sign up'
    },
    { path: "**", redirectTo: 'perfil' }
];