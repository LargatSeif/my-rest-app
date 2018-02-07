import { Injectable } from '@angular/core';
import { Http, Response, Headers ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Customer } from '../models/customer';


@Injectable()
export class CustomerService {
  
  private baseUrl:String = "http://localhost:8080/customers";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private customer = new Customer();

  constructor(private _http:Http) { }
  
  /*
  * fetch all customers
  */
  getAllCustomers(){

    return this._http.get(this.baseUrl+'/findAll' , this.options).map((response:Response)=>response.json())
          .catch(this.errorHandler);
  }

  /*
  * fetch one customer by id
  */
  getCustomerById(id:Number){
    
    return this._http.get(this.baseUrl+'/findone/'+id , this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  /*
  * create a customer
  */
  createCustomer(customer: Customer){    
    return this._http.post(this.baseUrl+'/create',JSON.stringify(customer) , this.options)
      .map((response: Response)=>{ alert("Welcome to ORANGE MEMBERS :D ");})
        .catch(this.errorHandler);
  }


  deleteCustomer(id:Number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  updateCustomer(customer:Customer){
    return this._http.put(this.baseUrl+'/edit',JSON.stringify(customer),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  setter(customer: Customer){
    this.customer=customer;
  }

  getter(){
    return this.customer;
  }  

  errorHandler( error:Response ){
    return Observable.throw(error || "SERVER ERROR");
  }
}
