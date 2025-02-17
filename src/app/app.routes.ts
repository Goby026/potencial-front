import { Routes } from '@angular/router';
import { ListaCargosComponent } from './components/lista-cargos/lista-cargos.component';
import { FormularioCargosComponent } from './components/formulario-cargos/formulario-cargos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/cargos', pathMatch: 'full'},
    {path: 'cargos', component: ListaCargosComponent},
    {path: 'cargos/nuevo', component: FormularioCargosComponent},
    {path: 'cargos/editar/:id', component: FormularioCargosComponent},
    {path: 'dashboard', component: DashboardComponent},
];
