import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './Experience/Experience.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [			
    AppComponent,
      ExperienceComponent,
      ExperienceComponent,
      ExperienceComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
