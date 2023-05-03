import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { ConvertToSpace } from "../pipe/convert-to-space.pipe";
import { StartComponent } from "../shared/star.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { productModuleRoute } from "./product.module.routes";

@NgModule({
    declarations: [   
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        StartComponent,
        ProductDetailComponent
    ],
    imports:[    
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(productModuleRoute)],
    exports: [
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        StartComponent,
        ProductDetailComponent
    ]
})
export class ProductModule{}