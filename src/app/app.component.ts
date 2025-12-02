import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,                  // 👈 Necesario
  imports: [RouterOutlet],           // 👈 CLAVE PARA QUE FUNCIONE router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // si tienes estilos
})
export class AppComponent {

  constructor(private router: Router) {}

  isLoginPage() {
    return this.router.url === '/';
  }
}
