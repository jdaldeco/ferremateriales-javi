import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
<<<<<<< Updated upstream
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
=======
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
>>>>>>> Stashed changes

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
<<<<<<< Updated upstream
    { path: 'clients', component: ClientsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'add-product', component: ProductsAddComponent },
    { path: 'users', component: UsersComponent }
=======
    { path: 'productos', component: ProductosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'clientes', component: ClientesComponent }
>>>>>>> Stashed changes
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);