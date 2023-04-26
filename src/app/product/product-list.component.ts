import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Product } from "src/types/Product";
import products from "../../api/products/products.json"

@Component({
  templateUrl: "./product-list.component.html",
  selector: "pm-products",
  styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ngOnInit(): void {
    this.productsFiltered = this.products
  }

  public productList: String = "Product List";
  public products: Product[] = products
  public imageWeight: number = 50;
  public imageMagine: number  = 2;
  public showImage: boolean = true;
  public buttonLable: string = this.showImage? "Hide Image" : "Show Image";
  private _productFilter: string = 'cart';
  public productsFiltered ?: Product[]

  public get productFilter(): string {
    return this._productFilter;
  }
  public set productFilter(value: string) {
    this._productFilter = value;
    this.productsFiltered = []
    this.products.forEach(element => {
      if(element.productName.toLowerCase().includes(this._productFilter.toLocaleLowerCase())){
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
