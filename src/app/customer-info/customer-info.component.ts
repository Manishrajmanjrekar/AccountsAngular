import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import {UIModel} from 'src/app/model/uimodel.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {
  customerForm: FormGroup;
  submitted = false;
  customerId:number = 0;
  customerDetails:UIModel.CustomerInfo;
  msg: string = '';
  showMsg: boolean = false;

  constructor(private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let isParamRouteInvoked = false;

    this.activatedRoute
      .params
      .subscribe(params => {
        console.log('Regular Params:', params);
        isParamRouteInvoked = true;
        if (params){ 
          this.customerId = Number(params["id"]) || 0;          
        }

        if (this.customerId > 0) {
          this.loadEditForm(); 
        }
        else{
          this.loadAddForm();
        }
      });

    if (!isParamRouteInvoked){
      this.loadAddForm();
    }
  }

  loadAddForm(){
    console.log('loadAddForm invoked');
    this.createFormGroup();
  }

  loadEditForm(){
    console.log('loadEditForm invoked');
    console.log(this.customerId);

    this.getCustomerDetails();
    if (this.customerDetails && this.customerDetails.customerId > 0){
      this.createFormGroup();
    }
    else{
      this.msg = "No details found for Customer Id: " + this.customerId;
      this.showMsgAlert(0);
    }
  }

  // create formgroup using formbuilder
  createFormGroup(){
    console.log('createFormGroup invoked');
    if (this.customerDetails == null)
      this.customerDetails = new UIModel.CustomerInfo();

    /*
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middlename: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required, Validators.minLength(10)]],
      homeTelephoneNo: ['', [Validators.required, Validators.minLength(9)]],
      address: ['', Validators.required],
      customerRefferedBy: ['', Validators.required],
    });
    */

    this.customerForm = this.formBuilder.group({
      firstName: [this.customerDetails.firstName, Validators.required],
      middlename: [this.customerDetails.middleName, Validators.required],
      lastName: [this.customerDetails.lastName, Validators.required],
      email: [this.customerDetails.email, [Validators.required, Validators.email]],
      mobileno: [this.customerDetails.mobileno, [Validators.required, Validators.minLength(10)]],
      homeTelephoneNo: [this.customerDetails.homeTelephoneNo, [Validators.required, Validators.minLength(9)]],
      address: [this.customerDetails.address, Validators.required],
      customerRefferedBy: [this.customerDetails.customerRefferedBy, Validators.required],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.customerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('submitted true now.....')
    // stop here if form is invalid
    if (this.customerForm.invalid) {
        return;
    }

    this.msg = "Customer saved successfully." + "<br/>" + JSON.stringify(this.customerForm.value);
    this.showMsgAlert(2000);
  }  

  getCustomerDetails(){
    if (this.customerId > 0) {
      this.customerDetails = UIModel.Customers.filter(x => x.customerId == this.customerId)[0];
    }
  }

  showMsgAlert(timeInterval: number){
    this.showMsg = true; 

    if (timeInterval > 0) {
      setTimeout(()=>{ 
        this.showMsg = false;
        this.msg = '';
      }, timeInterval);
    }
  }

}
