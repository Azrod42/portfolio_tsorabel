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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgoundComponent,
    DashboardComponent,
    BacklayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
