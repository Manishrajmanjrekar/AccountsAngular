import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UIModel} from 'src/app/model/uimodel.model';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {
  public searchForm: FormGroup;
  public submitted: boolean = false;
  public dataSource: UIModel.VendorInfo[];
  public displayColInfo: UIModel.ColInfo[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      vendorName: ['']
    });

    this.displayColInfo = [
      //{ field: 'vendorId', header: 'Vendor Id' },
      { field: 'name', header: 'Vendor Name', enableEditLink: true, editRoute:'vendor', editField:'vendorId' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'referredBy', header: 'Referred By' },
      { field: 'mobile', header: 'Mobile' },
      { field: 'alternateMobile', header: 'Alternate Mobile' }
    ];

    this.dataSource = UIModel.Vendors;
  }

  get f(){ return this.searchForm.controls};

  performSearch(){
    console.log('performSearch invoked');
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.dataSource = UIModel.Vendors;
    // filter data
    let vendorName = this.searchForm.value.vendorName;
    if (vendorName != undefined && vendorName != '') {
      this.dataSource =  this.dataSource.filter(item => item.name.toLowerCase().indexOf(vendorName.toLowerCase()) !== -1);
    }

    console.log(this.dataSource);
  }
}