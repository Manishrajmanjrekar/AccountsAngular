import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import {UIModel} from 'src/app/model/uimodel.model';

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
  vendorDetails:UIModel.VendorInfo;
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
      this.vendorDetails = UIModel.Vendors.filter(x => x.vendorId == this.vendorId)[0];
    }

    if (this.vendorDetails == null) {
      this.vendorDetails = new UIModel.VendorInfo();
    }
  }
}