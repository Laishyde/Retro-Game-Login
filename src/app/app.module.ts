import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './module/landing-page/views/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from './module/landing-page/landing-page.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './module/home/home.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LandingPageModule,
    AppRoutingModule,
    HomeModule,
    
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: './'
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

