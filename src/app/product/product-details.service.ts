import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService{
  constructor(private activatedRooute: ActivatedRoute){}

  public getProductId(): number{
    const productId = this.activatedRooute.snapshot.paramMap.get('id')
    return Number(productId);
  }
}
