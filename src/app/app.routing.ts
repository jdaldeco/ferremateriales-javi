import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProductsComponent } from './components/products/products.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';

import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersComponent } from './components/users/users.component';

import { SalesComponent } from './components/sales/sales.component';
import { SalesAddComponent } from './components/sales-add/sales-add.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'add-product', component: ProductsAddComponent },
    { path: 'users', component: UsersComponent },
    { path: 'add-user', component: UsersAddComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'add-sale', component: SalesAddComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);