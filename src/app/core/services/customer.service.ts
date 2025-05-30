import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'customer.json';

  constructor(
    private http: HttpClient
  ) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.apiUrl);

  }

}
