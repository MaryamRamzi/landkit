import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { HomeComponent } from './main/home/home.component';
import { LandingsComponent } from './main/landings/landings.component';
import {Routes,RouterModule} from "@angular/router";
import {AccountsComponent} from "./main/accounts/accounts.component";
import {DocumentationComponent} from "./main/documentation/documentation.component";
import {PagesComponent} from "./main/pages/pages.component";

const routs : Routes=[
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'landings', component:LandingsComponent},
  { path: 'accounts' , component:AccountsComponent},
  {path: 'documentation', component:DocumentationComponent},
  {path: 'pages', component:PagesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingsComponent,
    AccountsComponent,
    DocumentationComponent,
    PagesComponent
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
