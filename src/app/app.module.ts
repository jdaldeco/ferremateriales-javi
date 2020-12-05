import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { DatePipe } from '@angular/common'

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesAddComponent } from './components/sales-add/sales-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    HomeComponent,
    ProductsAddComponent,
    UsersAddComponent,
    SalesComponent,
    SalesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
