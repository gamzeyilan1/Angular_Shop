import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductAddForm1Component} from "./product/product-add-form1/product-add-form1.component";
import {ProductAddForms2Component} from "./product/product-add-forms2/product-add-forms2.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./login/login.guard";

const routes: Routes = [
  {path: 'products/category/:categoryId', component:ProductComponent},
  {path:'', component:ProductComponent},
  {path:'all', component:ProductComponent},
  {path:'product-add-1', component:ProductAddForm1Component, canActivate: [LoginGuard]},
  {path:'product-add-2', component:ProductAddForms2Component},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
