import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForoComponent } from './components/foro/foro.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'component', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'foro', component: ForoComponent}
];
