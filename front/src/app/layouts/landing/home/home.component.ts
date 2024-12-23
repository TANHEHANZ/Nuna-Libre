import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseLoadingBarComponent } from '../../../../@fuse/components/loading-bar';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule,FuseLoadingBarComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
