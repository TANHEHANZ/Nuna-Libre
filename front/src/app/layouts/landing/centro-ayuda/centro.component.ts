import { Component, HostBinding } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FuseLoadingBarComponent } from '../../../../@fuse/components/loading-bar';
import {
    FuseHorizontalNavigationComponent,
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '../../../../@fuse/components/navigation';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LanguagesComponent } from '../../../layout/common/languages/languages.component';
import { FuseFullscreenComponent } from '../../../../@fuse/components/fullscreen';
import { SearchComponent } from '../../../layout/common/search/search.component';
import { ShortcutsComponent } from '../../../layout/common/shortcuts/shortcuts.component';
import { MessagesComponent } from '../../../layout/common/messages/messages.component';
import { NotificationsComponent } from '../../../layout/common/notifications/notifications.component';
import { UserComponent } from '../../../layout/common/user/user.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { QuickChatComponent } from '../../../layout/common/quick-chat/quick-chat.component';
import { Subject, takeUntil } from 'rxjs';
import {
    Navigation,
    NavigationService,
} from '../../../core/navigation/navigation.service';
import { FuseMediaWatcherService } from '../../../../@fuse/services/media-watcher';

@Component({
    selector: 'app-centro-ayuda',
    standalone: true,
    imports: [
        CommonModule,
        NgIf,
        FuseVerticalNavigationComponent,
        FuseHorizontalNavigationComponent,
        MatButtonModule,
        MatIconModule,
        RouterOutlet,
    ],

    templateUrl: './centro.component.html',
    styleUrls: ['./centro.component.scss'],
})
export class CentroAyudaComponent {
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    ) {}
    ngOnInit(): void {
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
