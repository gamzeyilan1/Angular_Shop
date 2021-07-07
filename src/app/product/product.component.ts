import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product';
import {AlertifyService} from '../services/alertify.service';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductsService]
})
export class ProductComponent implements OnInit {
  title=" "
  products: Product[] =[];

  constructor(
    private productService: ProductsService,
    private obj: AlertifyService,
    private objRoute: ActivatedRoute ) {
  }


  ngOnInit(): void {
    this.objRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products= data;
      });
    });
  }

  addToCart(i:Product) {
    this.obj.success( i.name + " item has been added to cart.")

  }

}
