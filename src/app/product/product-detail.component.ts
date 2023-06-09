import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "src/types/Product";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "pm-product-detail",
    templateUrl: "./product-detail.component.html",
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{


  public backButtonText: string = "<< Back"
    public pageTitle: string = 'product details'
    public product?: Product;
    public sub?: Subscription
    constructor(private activatedRoute: ActivatedRoute, private route: Router,
      private productService: ProductService){}
    ngOnDestroy(): void {
      this.sub?.unsubscribe();
    }
    ngOnInit(): void {
      this.sub = this.productService.getProductById(this.getProductId()).subscribe({
        next: p => this.product = p,
        error: err => console.log(err),
        complete: ()=> console.log('completed')
      });
    }

    public getProductId(): number{
      const productId = this.activatedRoute.snapshot.paramMap.get('id')
      return Number(productId);
    }

    public onBack(): void {
      this.route.navigate(['/products'])
      }

}
