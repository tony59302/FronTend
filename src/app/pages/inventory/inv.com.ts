import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inv.com.html',
  styleUrls: ['./inv.com.css']
})
export class InventoryComponent {

  // Ejemplo de datos (esto es lo que hará que tu tabla sí se muestre)
  equipos = [
    { id: 1, nombre: "Microscopio", estado: "Disponible" },
    { id: 2, nombre: "Cautín", estado: "En uso" },
    { id: 3, nombre: "Osciloscopio", estado: "Dañado" }
  ];

}
