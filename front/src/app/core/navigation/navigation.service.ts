import { Injectable } from '@angular/core';
// import { Navigation } from 'app/core/navigation/navigation.types';
import { ReplaySubject, Observable } from 'rxjs';

export interface Navigation {
    id: string;
    title: string;
    type: 'group' | 'item'; 
    children?: Navigation[];
    icon?: string;
    link?: string;
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
    private _navigation: ReplaySubject<Navigation> =
        new ReplaySubject<Navigation>(1);

    // Rutas de navegación predefinidas
    private _defaultNavigation: Navigation = {
        id: 'main',
        title: 'Main Navigation',
        type: 'group',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'dashboard',
                link: '/dashboard',
            },
            {
                id: 'settings',
                title: 'Settings',
                type: 'item',
                icon: 'settings',
                link: '/settings',
            },
        ],
    };

    constructor() {
        this._navigation.next(this._defaultNavigation);
    }

    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }
}
