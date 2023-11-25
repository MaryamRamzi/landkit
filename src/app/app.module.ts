import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { HomeComponent } from './main/home/home.component';
import { LandingsComponent } from './main/landings/landings.component';
import {Routes,RouterModule} from "@angular/router";

const routs : Routes=[
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'landings', component:LandingsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
