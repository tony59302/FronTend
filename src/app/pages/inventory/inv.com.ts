import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../../services/items.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-inventario',
  standalone: true,                      // 👈 MUY IMPORTANTE EN ANGULAR 17+
  imports: [CommonModule],               // 👈 Aquí habilitamos *ngFor y *ngIf
  templateUrl: './inv.com.html'

})
export class InventarioComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.cargarItems();
  }

  cargarItems() {
    this.itemsService.getItems().subscribe({
      next: (data) => (this.items = data),
      error: (err) => console.error('Error cargando items:', err)
    });
  }
  eliminarItem(id: number) {
  if (!confirm('¿Seguro que deseas eliminar este item?')) return;

  this.itemsService.deleteItem(id).subscribe({
    next: () => {
      this.items = this.items.filter(i => i.id !== id);
    },
    error: (err) => console.error('Error al eliminar:', err)
  });
}

}

