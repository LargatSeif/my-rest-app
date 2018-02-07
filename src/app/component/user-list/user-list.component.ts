import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared-services/customer.service';
import { Customer } from '../../models/customer';
import { error } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  customers: Customer[];
  constructor(private _customerService:CustomerService ,private _router: Router) {  }

  ngOnInit() {
    this._customerService.getAllCustomers().subscribe(
      (customers)=>{     this.customers = customers; },
      (error)=>{console.log(error)}
    );
  }


  deleteCustomer(customer){
    this._customerService.deleteCustomer(customer.id).subscribe((data)=>{
        this.customers.splice(this.customers.indexOf(customer),1);
    },(error)=>{
      console.log(error);
    });
  }


  updateCustomer(customer){  
    this._customerService.setter(customer);
    this._router.navigate(['/admin/customers/edit']);
  }

  newProduct(){
  let customer = new Customer();
  this._customerService.setter(customer);
    this._router.navigate(['/admin/customers/new']);

  }
  
}
