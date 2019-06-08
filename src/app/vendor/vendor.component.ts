import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendorForm: FormGroup;
  submitted:boolean = false; 
  mobilePattern = "^[6-9][0-9]{9}$";
  vendorId:number = 0;
  vendorDetails:VendorInfo;
  msg: string = '';
  showMsg: boolean = false;

  constructor(private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute) {

   }

  ngOnInit() {        
    let paramsChangeDetected = false;

    // read route parameters
    /*this.activatedRoute
      .queryParams
      .subscribe(queryParams => {
        console.log('Query Params:', queryParams);      
        if (queryParams){ 
          this.vendorId = Number(queryParams["id"]) || 0;         
        }
        this.loadForm(); 
      });*/

    this.activatedRoute
      .params
      .subscribe(params => {
        console.log('Regular Params:', params);
        paramsChangeDetected = true;
        if (params){ 
          this.vendorId = Number(params["id"]) || 0;          
        }
        this.loadForm(); 
      });

    if (!paramsChangeDetected){ // fresh request
      this.loadForm();
    }
  }

  loadForm(){
    console.log(this.vendorId);
    this.vendorDetails = null;
    this.getVendorDetails();

    if (this.vendorId > 0 && (this.vendorDetails == null || this.vendorDetails.vendorId != this.vendorId)){
      this.msg = "No details found for the Vendor Id: " + this.vendorId;
      this.vendorId = 0;
      this.showMsgAlert();
    }

    /*this.vendorForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      referredBy: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      alternateMobile: ['', [Validators.pattern(this.mobilePattern)]],
    });*/

    this.vendorForm = this.formBuilder.group({
      name: [this.vendorDetails.name, Validators.required],
      address: [this.vendorDetails.address, Validators.required],
      city: [this.vendorDetails.city, Validators.required],
      referredBy: [this.vendorDetails.referredBy, Validators.required],
      mobile: [this.vendorDetails.mobile, [Validators.required, Validators.pattern(this.mobilePattern)]],
      alternateMobile: [this.vendorDetails.alternateMobile, [Validators.pattern(this.mobilePattern)]],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.vendorForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('submitted true now.....')
    // stop here if form is invalid
    if (this.vendorForm.invalid) {
        return;
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.vendorForm.value))
    this.msg = "Vendor saved successfully.<br/>" + JSON.stringify(this.vendorForm.value);
    this.showMsgAlert();
  }
  

  showMsgAlert(){
    this.showMsg = true; 

    setTimeout(()=>{ 
      this.showMsg = false;
      //this.msg = '';
    }, 1500);
    
  }

  getVendorDetails(){
    if (this.vendorId > 0) {
      this.vendorDetails = Vendors.filter(x => x.vendorId == this.vendorId)[0];
    }

    if (this.vendorDetails == null) {
      this.vendorDetails = new VendorInfo();
    }
  }
}

// models
export class VendorInfo{
vendorId: number = null;
name: string = '';
address: string = '';
city: string = '';
referredBy: string = '';
mobile: string = '';
alternateMobile: string = '';
}

// mock data
export const Vendors: VendorInfo[] = [
  {vendorId: 1, name: 'Arjun', address: 'Arjun address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'8123456789', alternateMobile: '8234567890'},
  {vendorId: 2, name: 'Rizwan', address: 'Rizwan address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 3, name: 'Vendor3', address: 'Vendor3 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 4, name: 'Vendor4', address: 'Vendor4 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 5, name: 'Vendor5', address: 'Vendor5 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 6, name: 'Vendor6', address: 'Vendor6 address', city: 'Hyderabad', referredBy: 'referrer 3', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 7, name: 'Vendor7', address: 'Vendor7 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 8, name: 'Vendor8', address: 'Vendor8 address', city: 'Hyderabad', referredBy: 'referrer 5', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 9, name: 'Vendor9', address: 'Vendor9 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
  {vendorId: 10, name: 'Vendor10', address: 'Vendor10 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
];
