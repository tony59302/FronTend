import { Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inv.com';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './pages/edit-equipment/edit-equipment.component';

export const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'agregar', component: AddEquipmentComponent },
  { path: 'editar/:id', component: EditEquipmentComponent }
];
