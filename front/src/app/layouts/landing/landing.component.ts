import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FuseLoadingBarComponent } from '../../../@fuse/components/loading-bar';
import { FuseHorizontalNavigationComponent, FuseVerticalNavigationComponent } from '../../../@fuse/components/navigation';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LanguagesComponent } from '../../layout/common/languages/languages.component';
import { FuseFullscreenComponent } from '../../../@fuse/components/fullscreen';
import { SearchComponent } from '../../layout/common/search/search.component';
import { ShortcutsComponent } from '../../layout/common/shortcuts/shortcuts.component';
import { MessagesComponent } from '../../layout/common/messages/messages.component';
import { NotificationsComponent } from '../../layout/common/notifications/notifications.component';
import { UserComponent } from '../../layout/common/user/user.component';
import { RouterOutlet } from '@angular/router';
import { QuickChatComponent } from '../../layout/common/quick-chat/quick-chat.component';

@Component({
    selector: 'app-landing',
    template: `<router-outlet></router-outlet>`,
    // templateUrl: './layout.component.html',

    // imports: [CommonModule,FuseLoadingBarComponent,FuseLoadingBarComponent, NgIf, FuseVerticalNavigationComponent, FuseHorizontalNavigationComponent, MatButtonModule, MatIconModule, LanguagesComponent, FuseFullscreenComponent, SearchComponent, ShortcutsComponent, MessagesComponent, NotificationsComponent, UserComponent, RouterOutlet, QuickChatComponent],
    
    
    

})
export class LandingComponent {}
