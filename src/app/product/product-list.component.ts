import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Product } from "src/types/Product";

import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  selector: "pm-products",
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public productList: String = "Product List";
  public products?: Product[];
  public imageWeight: number = 50;
  public imageMagine: number  = 2;
  public showImage: boolean = true;
  public buttonLable: string = this.showImage? "Hide Image" : "Show Image";
  private _productFilter?: string;
  public productsFiltered ?: Product[]

  constructor (private productService: ProductService){}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
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
