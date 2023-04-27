import { Injectable } from "@angular/core";
import { Product } from "src/types/Product";
import products from "../../api/products/products.json"

@Injectable({
    providedIn: 'root'
})
export class ProductService{
  public getProducts(): Product[] {
    return products;
  }

}