import { Component , OnInit} from '@angular/core';

import { ProductService } from './shared-services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  products:Product[];
  
  constructor(private _productsService: ProductService){}

  ngOnInit(){
    this._productsService.getAllProducts()
      .subscribe(
        (data)=>{
          
          this.products = data
          console.log(this.products);
        },
        (error)=>{
          console.log(error)
        }
      )
    ;
  }
   
}
