import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent {

  id!: string; // El ID recibido por la ruta

  constructor(private router: Router, private route: ActivatedRoute) {}



  guardarCambios() {
    // Aquí luego guardarás en la base de datos...
    console.log("Guardando cambios del equipo:", this.id);

    // Luego de guardar → regresar al inventario
    this.router.navigate(['/inventory']);
  }
}
