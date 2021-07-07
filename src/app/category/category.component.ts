import { Component, OnInit } from '@angular/core';
import {Category} from './category';
import {AlertifyService} from '../services/alertify.service';
import {CategoryService} from "../services/categories.service";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor( private obj2:CategoryService, private obj:AlertifyService) {}

  title="Categories List"
  categories: Category [] = [];

  ngOnInit(): void {
    this.obj2.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
