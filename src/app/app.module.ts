import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productModuleRoute } from './product/product.module.routes';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [

  ],
  imports: [
    ProductModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(productModuleRoute)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
