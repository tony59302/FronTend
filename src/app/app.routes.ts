import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home';
import { InventoryComponent } from './pages/inventory/inv.com';
import { AddEquipmentComponent } from './pages/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './pages/edit-equipment/edit-equipment.component';
import { LoginComponent } from './pages/login/login';


export const routes: Routes = [
  { path: '', component: HomeComponent },           // 🏠 Inicio
  { path: 'login', component: LoginComponent },     // 🔑 Login
  { path: 'inventory', component: InventoryComponent }, // 📦 Inventario
  { path: 'agregar', component: AddEquipmentComponent }, // ➕ Agregar equipo
  { path: 'editar/:id', component: EditEquipmentComponent }, // ✏️ Editar equipo
  { path: '**', redirectTo: '' } // 🚨 Si escriben algo mal, lo manda al inicio
];