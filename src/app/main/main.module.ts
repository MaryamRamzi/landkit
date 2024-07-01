import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AccountComponent } from './Account/account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DocumantationComponent } from './documantation/documantation.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent,
    DocumantationComponent,
    DocumentationComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
