import { Component } from "@angular/core";
import { Product } from "src/types/Product";
import products from "../../api/products/products.json"

@Component({
  templateUrl: "./product-list.component.html",
  selector: "pm-products"
})
export class ProductListComponent{
  public productList: String = "Product List";
  public products: Product[] = products

}
