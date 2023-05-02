import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpace } from './pipe/convert-to-space.pipe';
import { StartComponent } from './shared/star.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProductDetailComponent } from './product/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StartComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
