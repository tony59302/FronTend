import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent {

  nuevoEquipo = {
    nombre: '',
    estado: '',
    descripcion: ''
  };

  constructor(private router: Router) {}

  agregarEquipo() {
    console.log("Equipo agregado:", this.nuevoEquipo);

    this.router.navigate(['/inventory']);
  }
}
