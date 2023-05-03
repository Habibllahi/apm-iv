import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { WelcomeComponent } from "../home/welcome.component";
import { productDetailGuard } from "../gaurd/product-detail.guard";

export const productModuleRoute: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [productDetailGuard]
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
  ]
