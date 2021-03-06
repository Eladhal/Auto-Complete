import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './Components/main/app.component';
import {DbServiceService} from './Services/db.service';
import {AutoCompleteComponent} from'./Components/auto-complete/auto-complete.component';
import { HttpClientModule } from '@angular/common/http';
import {HighlightSearch} from './highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
