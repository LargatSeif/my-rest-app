import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../shared-services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

   
  private product:Product;

  constructor(  private _productService: ProductService , private route: ActivatedRoute , _router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
     this._productService.getProductById(id)     
      .subscribe(
        (data)  =>{ this.product = data },
        (error) =>{ console.log(error)  }
      );
  }

}
