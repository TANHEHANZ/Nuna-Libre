import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/landing/home/home.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { CentroAyudaComponent } from './layouts/landing/centro-ayuda/centro.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'centro-ayuda', component: CentroAyudaComponent },
        ],
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./layouts/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    { path: '**', redirectTo: '' },
];
