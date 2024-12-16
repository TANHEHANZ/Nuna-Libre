import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [LandingComponent],
    imports: [CommonModule, LandingRoutingModule, HomeComponent],
})
export class LandingModule {}
