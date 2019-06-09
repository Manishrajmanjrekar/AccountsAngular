import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UIModel} from 'src/app/model/uimodel.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  public searchForm: FormGroup;
  public submitted: boolean = false;
  public dataSource: UIModel.CustInfo[];
  public displayColInfo: UIModel.ColInfo[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      customerName: ['']
    });

    this.displayColInfo = [
      //{ field: 'customerId', header: 'Customer Id' },
      { field: 'fullName', header: 'Customer Name', enableEditLink: true, editRoute:'customerinfo', editField:'customerId' },
      { field: 'address', header: 'Address' },
      { field: 'email', header: 'Email' },
      { field: 'customerRefferedBy', header: 'Referred By' },
      { field: 'mobileno', header: 'Mobile' },
    ];
    
    this.dataSource = UIModel.Customers;
  }

  get f(){ return this.searchForm.controls};

  performSearch(){
    console.log('performSearch invoked');
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.dataSource =  UIModel.Customers;
    // filter data
    let customerName = this.searchForm.value.customerName;
    if (customerName != undefined && customerName != '') {
      this.dataSource =  this.dataSource.filter(item => item.fullName.toLowerCase().indexOf(customerName.toLowerCase()) !== -1);
    }
  }
}

