import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import {
    FuseNavigationItem,
    FuseNavigationService,
} from '../../../@fuse/components/navigation';

import { RouterOutlet } from '@angular/router';
import { FuseHorizontalNavigationBasicItemComponent } from '../../../@fuse/components/navigation/horizontal/components/basic/basic.component';
import { FuseHorizontalNavigationBranchItemComponent } from '../../../@fuse/components/navigation/horizontal/components/branch/branch.component';
import { FuseHorizontalNavigationSpacerItemComponent } from '../../../@fuse/components/navigation/horizontal/components/spacer/spacer.component';
import { ReplaySubject, Subject } from 'rxjs';
import { FuseUtilsService } from '../../../@fuse/services/utils';
import { fuseAnimations } from '../../../@fuse/animations';

@Component({
    selector: 'app-landing',
    templateUrl: 'landing.component.html',
    standalone: true,
    animations: fuseAnimations,

    imports: [
        RouterOutlet,
        NgFor,
        NgIf,
        FuseHorizontalNavigationBasicItemComponent,
        FuseHorizontalNavigationBranchItemComponent,
        FuseHorizontalNavigationSpacerItemComponent,
    ],
})
export class LandingComponent implements OnChanges, OnInit, OnDestroy {
    @Input() name: string = this._fuseUtilsService.randomId();
    @Input() navigation: FuseNavigationItem[];
    @Input() navigation2: FuseNavigationItem[];
    @Input() reportar: FuseNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseUtilsService: FuseUtilsService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Navigation
        if ('navigation' in changes) {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Make sure the name input is not an empty string
        if (this.name === '') {
            this.name = this._fuseUtilsService.randomId();
        }
        this.navigation = [
            {
                id: 'home',
                title: 'Inicio',
                type: 'basic',
                icon: 'home',
                link: '/',
            },
            {
                id: 'centro',
                title: 'Centro de ayuda',
                type: 'basic',
                icon: 'person',
                link: '/centro-ayuda',
            },
        ];
        this.reportar = [
            {
                id: 'reportar',
                title: 'Reportar',
                type: 'basic',
                icon: 'report',
                link: '/reportar',
            },
        ];
        this.navigation2 = [
            {
                id: 'ingresar',
                title: 'Ingresar',
                type: 'basic',
                link: '/login',
            },

            {
                id: 'Registrarse',
                title: 'Registrarse',
                type: 'basic',
                link: '/Register',
            },
        ];
        this._fuseNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Deregister the navigation component from the registry
        this._fuseNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
