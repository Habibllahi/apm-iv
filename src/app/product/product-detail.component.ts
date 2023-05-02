import { Component, OnInit } from "@angular/core";
import { ProductDetailService } from "./product-details.service";
import { ProductService } from "./product.service";
import { Product } from "src/types/Product";
import { Observable } from "rxjs";

@Component({
    selector: "pm-product-detail",
    templateUrl: "./product-detail.component.html",
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

    public pageTitle: string = 'product details'
    public product?: Observable<Product | undefined>
    constructor(private productDetailService: ProductDetailService, private productService: ProductService){}
    ngOnInit(): void {
      this.product = this.productService.getProductById(this.productDetailService.getProductId());
    }



}
