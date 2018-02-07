import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../shared-services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private customer: Customer;

  constructor(private _customerService: CustomerService , private _router: Router) { }

  ngOnInit() {
    this.customer=this._customerService.getter();
  }

  processForm(){
    if(this.customer.id==undefined){
       this._customerService.createCustomer(this.customer).subscribe(
         (customer) =>{ this._router.navigateByUrl('/');},
         (error)    =>{ console.log(error); }
      );
    }else{
      this._customerService.updateCustomer(this.customer).subscribe(
        (customer)=>{ console.log(customer);this._router.navigate(['/admin/customers']);  },
        (error)=>{ console.log(error);}
      );
    }
  }

}
