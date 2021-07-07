import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {CategoryService} from "../../services/categories.service";
import {Category} from "../../category/category";
import {NgForm} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.scss'],
  providers: [CategoryService, ProductsService, AlertifyService]
})
export class ProductAddForm1Component implements OnInit {

  constructor(private categoryService:CategoryService, private productsService:ProductsService, private alertifyService: AlertifyService) { }
  model:Product = new Product();
  categories: Category [] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  add(form:NgForm ) {
    this.productsService.addProduct(this. model).subscribe(data=>{
       this.alertifyService.success(data.name+ " has been added successfully.")
    });
  }
}
