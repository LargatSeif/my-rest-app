import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../shared-services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
 
  products: Product[];
  constructor(private _productService:ProductService ,private _router:Router) {  }

  ngOnInit() {
    this._productService.getAllProducts().subscribe(
      (products)=>{     this.products = products; },
      (error)=>{console.log(error)}
    );
  }

  deleteProduct(product){
    this._productService.deleteProduct(product.id).subscribe((data)=>{
        this.products.splice(this.products.indexOf(product),1);alert("DELETED !!!");
    },(error)=>{
      console.log(error);
    });
  }

   updateProduct(product){  
     this._productService.setter(product);
     this._router.navigate(['/admin/products/edit']);
   }

   newProduct(){
   let product = new Product();
    this._productService.setter(product);
     this._router.navigate(['/admin/products/new']);
   
   }
}
