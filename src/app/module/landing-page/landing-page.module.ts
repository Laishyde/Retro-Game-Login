import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './views/landing-page.component';
import { landingPageRoutingModule } from './landing-page-routing.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    landingPageRoutingModule,
  ],
  exports: [
    LandingPageComponent
  ],
})
export class LandingPageModule { }
