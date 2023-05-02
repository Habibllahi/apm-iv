import { Routes } from "@angular/router";
import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { WelcomeComponent } from "./home/welcome.component";

export const routes: Routes = [
    {
        path: 'products', 
        component: ProductListComponent
    },
    {
        path: 'products/:id', 
        component: ProductDetailComponent
    },
    {
        path: 'welcome', 
        component: WelcomeComponent
    },
    {
        path: 'details',
        component: ProductDetailComponent
    },
    {
        path: '', 
        redirectTo: 'welcome', 
        pathMatch: 'full'
    }
  ]