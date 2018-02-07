import { Component, OnInit , Input } from '@angular/core';
import { Product } from '../../models/product'; 
import { ProductService } from '../../shared-services/product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  
  constructor(private _productsService: ProductService , private _router: Router){}

  ngOnInit(){
    this._productsService.getAllProducts()
      .subscribe(
        (data)  =>  { this.products = data;console.log(this.products);},
        (error) =>  { console.log(error)  }
      );
  }

   
}
