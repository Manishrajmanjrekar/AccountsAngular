import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import { DatePipe } from '@angular/common';
import {UIModel} from 'src/app/model/uimodel.model';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.css'],
  providers: [DatePipe]
})

export class StockinComponent implements OnInit {
  stockinForm: FormGroup;
  submitted = false;
  vendorList: UIModel.VendorInfo[];
  stockinId:number = 0;
  stockinDetails:UIModel.StockinInfo;
  msg: string = '';
  showMsg: boolean = false;

  constructor(private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.vendorList = UIModel.Vendors;
    let isParamRouteInvoked = false;

    this.activatedRoute
      .params
      .subscribe(params => {
        console.log('Regular Params:', params);
        isParamRouteInvoked = true;
        if (params){ 
          this.stockinId = Number(params["id"]) || 0;          
        }

        if (this.stockinId > 0) {
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
    console.log(this.stockinId);

    this.getStockinDetails();
    if (this.stockinDetails && this.stockinDetails.stockinId > 0){
      console.log(this.datePipe.transform(this.stockinDetails.createdDate, 'yyyy-MM-dd'));
      console.log(this.stockinDetails.createdDate.toISOString().substring(0,10));
      this.createFormGroup();
    }
    else{
      this.msg = "No details found for Stockin Id: " + this.stockinId;
      this.showMsgAlert(0);
    }
  }

  // create formgroup using formbuilder
  createFormGroup(){
    console.log('createFormGroup invoked');
    if (this.stockinDetails == null)
      this.stockinDetails = new UIModel.StockinInfo();

    /*
    this.stockinForm = this.formBuilder.group({
      vendor: ['',Validators.required,],
      simpleName: ['', Validators.required],
      createdDate: ['', [Validators.required, Validators]],
      totalCount: [null,[Validators.required, Validators.min(1)]],
    });
    */

    this.stockinForm = this.formBuilder.group({
      vendor: [this.stockinDetails.vendorId, Validators.required,],
      simpleName: [this.stockinDetails.simpleName, Validators.required],
      createdDate: [(this.stockinDetails.vendorId > 0 ? this.datePipe.transform(this.stockinDetails.createdDate, 'yyyy-MM-dd') : ''), [Validators.required, Validators]],
      totalCount: [this.stockinDetails.totalCount,[Validators.required, Validators.min(1)]],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.stockinForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('submitted true now.....')
    // stop here if form is invalid
    if (this.stockinForm.invalid) {
        return;
    }

    this.msg = "Stockin saved successfully." + "<br/>" + JSON.stringify(this.stockinForm.value);
    this.showMsgAlert(2000);
  }  

  getStockinDetails(){
    if (this.stockinId > 0) {
      this.stockinDetails = UIModel.Stockins.filter(x => x.stockinId == this.stockinId)[0];
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