import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CentroAyudaComponent } from './landing/centro-ayuda/centro.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', component: HomeComponent }, // Ruta por defecto (Inicio)
            { path: 'centro-ayuda', component: CentroAyudaComponent }, // Ruta para el Centro de Ayuda
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingRoutingModule {}
