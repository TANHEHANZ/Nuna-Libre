import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { CentroAyudaComponent } from './centro-ayuda/centro.component';

@NgModule({
    imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
