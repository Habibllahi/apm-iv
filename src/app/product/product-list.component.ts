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
    
  }

  public productList: String = "Product List";
  public products: Product[] = products
  public imageWeight: number = 50;
  public imageMagine: number  = 2;
  public showImage: boolean = false;
  public buttonLable: string = this.showImage? "Hide Image" : "Show Image";
  public productFilter: string = 'cart';


  public toggleImage(){
      this.showImage = !this.showImage;
      this.buttonLable = this.showImage? "Hide Image" : "Show Image";
  }


}
