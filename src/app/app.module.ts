import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule} from "@angular/common/http";
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import {FormsModule, ReactiveFormsModule}  from "@angular/forms";
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import {AlertifyService} from "./services/alertify.service";
import {AccountService} from "./services/account.service";
import {LoginGuard} from "./login/login.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductAddForm1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
