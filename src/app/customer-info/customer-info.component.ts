import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middlename: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required, Validators.minLength(10)]],
      homeTelephoneNo: ['', [Validators.required, Validators.minLength(9)]],
      address: ['', Validators.required],
      customerRefferedBy: ['', Validators.required],


  });
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
 console.log('submitted true now.....')
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}

export class CustInfo{
  firstName:string;
  middleName:string;
  lastName:string;
  email:string;
  mobileno:string;
  homeTelephoneNo:string;
  address:string;
  customerRefferedBy:string;

}