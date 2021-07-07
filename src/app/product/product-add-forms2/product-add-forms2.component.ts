import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../product";
import {Category} from "../../category/category";
import {CategoryService} from "../../services/categories.service";
import {ProductsService} from "../../services/products.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.scss'],
  providers: [CategoryService, ProductsService],
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder, private categoryService: CategoryService, private productService:ProductsService, private alertifyService:AlertifyService) { }
  // @ts-ignore
  productAddForm:FormGroup;
  product: Product=new Product();
  categories: Category[] =[];

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required] ,
      categoryId: ["", Validators.required],
    });
  }


  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data=> {
      this.categories = data
    });
  }

  add() {
    if(this.productAddForm.valid){
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name+ " has been added successfully.")
    });
  }

}
