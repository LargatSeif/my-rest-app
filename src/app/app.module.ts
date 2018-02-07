import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';

import { UserListComponent } from './component/user-list/user-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';

import { CustomerService } from './shared-services/customer.service';
import { ProductService } from './shared-services/product.service';

import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { ProductFormComponent } from './component/product-form/product-form.component';



const appRoutes:Routes=[
  { path:'', component: HomeComponent},
  { path:'admin', component: AdminComponent},
  { path:'admin/products', component: AdminProductComponent},
  { path:'admin/products/new', component: ProductFormComponent},
  { path:'admin/products/edit', component: ProductFormComponent},
  
  { path:'admin/customers', component: UserListComponent},
  { path:'admin/customers/new', component: UserFormComponent},
  { path:'admin/customers/edit', component: UserFormComponent},


  { path:'subscribe', component: UserFormComponent},
  
  { path:'products', component: ProductListComponent},
  { path:'products/:id', component: SingleProductComponent},
  

];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ProductListComponent,
    ProductComponent,
    SingleProductComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService , ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
