import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './add-equipment.component.html'
})
export class AgregarItemComponent {

  nombre = '';
  categoria = '';
  estado = '';
  descripcion = '';

  constructor(private itemsService: ItemsService) {}

  guardar() {
    const data = {
      nombre: this.nombre,
      categoria: this.categoria,
      estado: this.estado,
      descripcion: this.descripcion,
    };

    this.itemsService.createItem(data).subscribe({
      next: (res) => {
        console.log('Item creado:', res);
        alert('Item agregado correctamente');
      },
      error: (err) => console.error('Error al agregar:', err)
    });
  }
}
