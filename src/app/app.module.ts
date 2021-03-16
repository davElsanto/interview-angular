import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCodesComponent } from './components/add-codes/add-codes.component';

import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './components/articles/articles.component'
@NgModule({
  declarations: [
    AppComponent,
    AddCodesComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
