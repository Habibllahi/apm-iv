import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { ConvertToSpace } from "../pipe/convert-to-space.pipe";
import { StartComponent } from "../shared/star.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { productModuleRoute } from "./product.module.routes";
import { SharedModule } from "../shared/share.module";

@NgModule({
    declarations: [   
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        ProductDetailComponent
    ],
    imports:[    
        SharedModule,
        RouterModule.forChild(productModuleRoute)],
    exports: [
        AppComponent,
        ProductListComponent,
        ConvertToSpace,
        StartComponent,
        ProductDetailComponent
    ]
})
export class ProductModule{}