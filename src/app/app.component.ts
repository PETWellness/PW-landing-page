import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importa Router y NavigationEnd
import { filter } from 'rxjs';
import { UiService } from './ui.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForoComponent } from './components/foro/foro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    ForoComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Asegúrate de que el nombre de propiedad es styleUrls, no styleUrl
})
export class AppComponent {
  title = 'PetWellnes';

  showMainContent: boolean = true;

  constructor(private uiService: UiService, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        this.showMainContent = url === '/' || url === '/home';
      });

    this.uiService.showMainContent$.subscribe((show) => {
      this.showMainContent = show;
    });
  }
}
