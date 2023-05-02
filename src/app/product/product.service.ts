import { Injectable } from "@angular/core";
import { Product } from "src/types/Product";
import products from "../../api/products/products.json"
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, filter, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private _url: string = "api/products/products.json";


    constructor(private http: HttpClient){}

    public getProductsViaHttpClient(): Observable<Product[]> {
        return this.http.get<Product[]>(this._url);
    }

    public getProducts(): Observable<Product[]> {
        return new Observable<Product[]>(subscriber => {
            subscriber.next(products)
        }).pipe<Product[]>(catchError((err, caught)=>{
            console.log(err);
            return caught;
        }));
    }

    public getProductById(id: number): Observable<Product>{
      return this.getProducts().pipe(map((products) => products.find(product => product.productId === id)!));
    }


    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
}
