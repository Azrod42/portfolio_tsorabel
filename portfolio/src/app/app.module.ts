import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { BackgoundComponent } from './components/backgound/backgound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BacklayerComponent } from './components/backlayer/backlayer.component';
import { AboutComponent } from './dashboard/pages/about/about.component';
import { ToolingComponent } from './dashboard/pages/tooling/tooling.component';
import { CreditsComponent } from './dashboard/pages/credits/credits.component';
import { ProjectsComponent } from './dashboard/pages/projects/projects.component';
import { ContactComponent } from './dashboard/pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgoundComponent,
    DashboardComponent,
    BacklayerComponent,
    AboutComponent,
    ToolingComponent,
    CreditsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
