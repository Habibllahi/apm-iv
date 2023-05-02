import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Product } from "src/types/Product";

import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./product-list.component.html",
  selector: "pm-products",
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  public productList: String = "Product List";
  public products?: Product[];
  public imageWeight: number = 50;
  public imageMagine: number  = 2;
  public showImage: boolean = true;
  public buttonLable: string = this.showImage? "Hide Image" : "Show Image";
  private _productFilter?: string;
  public productsFiltered ?: Product[];
  private httpSubscription?: Subscription;
  private errorMessage?: string;

  constructor (private productService: ProductService){}
  ngOnDestroy(): void {
    this.httpSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.httpSubscription = this.productService.getProducts()
    .subscribe({
      next: (value: Product[])=> this.products = value, 
      error: error => this.errorMessage = error
    });
    this.productsFiltered = this.products
  }


  public get productFilter(): string | undefined {
    return this._productFilter;
  }
  public set productFilter(value: string | undefined) {
    this._productFilter = value;
    this.productsFiltered = []
    this.products?.forEach(element => {
      if(element.productName.toLowerCase().includes(this._productFilter!.toLocaleLowerCase())){
        this.productsFiltered?.push(element);
      }
    });
  }


  public toggleImage(){
      this.showImage = !this.showImage;
      this.buttonLable = this.showImage? "Hide Image" : "Show Image";
  }

  public notify(value: string): void{
    console.log(value);  
  }


}
