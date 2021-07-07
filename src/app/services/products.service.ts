import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Product} from "../product/product";
import {Observable, throwError} from "rxjs";
import {tap, catchError} from "rxjs/operators";


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  path = "http://localhost:3000/products";

  getProducts(categoryId:number): Observable<Product[]> {
    let newPath = this.path;
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
  );

  }

  handleError(err: HttpErrorResponse){
    let errorMessage="";
    if (err.error instanceof ErrorEvent) {
      errorMessage="An error has occurred " +err.error.message;}
    else { errorMessage="System error"; }
    return throwError (errorMessage);
    }

    addProduct(product:Product):Observable<Product> {
    const httpOptionsVar={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptionsVar).pipe(tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError))
    };
}
