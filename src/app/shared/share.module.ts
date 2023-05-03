import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StartComponent } from "./star.component";

@NgModule({
    declarations: [
        StartComponent,
    ],
    exports:[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StartComponent
    ]
})
export class SharedModule{}