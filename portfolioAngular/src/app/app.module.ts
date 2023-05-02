import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AptitudeCardComponent } from './aptitude-card/aptitude-card.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';

import { ProjectCardComponent } from './project-card/project-card.component';
@NgModule({
  declarations: [			
    AppComponent,
    AptitudeCardComponent,
      CertificationCardComponent,

      ProjectCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
