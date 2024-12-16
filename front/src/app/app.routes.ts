import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./layouts/landing/landing.module').then(
                (m) => m.LandingModule
            ),
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
