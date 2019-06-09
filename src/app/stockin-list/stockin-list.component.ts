import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UIModel} from 'src/app/model/uimodel.model';

@Component({
  selector: 'app-stockin-list',
  templateUrl: './stockin-list.component.html',
  styleUrls: ['./stockin-list.component.css']
})

export class StockinListComponent implements OnInit {
  public searchForm: FormGroup;
  public submitted: boolean = false;
  public dataSource: UIModel.StockinInfo[];
  public displayColInfo: UIModel.ColInfo[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      stockinName: [''],
      vendorName: ['']
    });

    this.displayColInfo = [
      //{ field: 'stockinId', header: 'Stockin Id' },
      { field: 'simpleName', header: 'Simple Name', enableEditLink: true, editRoute:'stockin', editField:'stockinId' },
      { field: 'createdDate', header: 'Created Date' },
      { field: 'vendor', header: 'Vendor Name' },      
      { field: 'totalCount', header: 'Total Count' }
    ];

    this.dataSource = UIModel.Stockins;
  }

  get f(){ return this.searchForm.controls};

  performSearch(){
    console.log('performSearch invoked');
    this.submitted = true;

    if (this.searchForm.invalid) {
      return;
    }

    this.dataSource =  UIModel.Stockins;
    // filter data
    let stockinName = this.searchForm.value.stockinName;
    let vendorName = this.searchForm.value.vendorName;

    if (stockinName != undefined && stockinName != '') {
      this.dataSource =  this.dataSource.filter(item => item.simpleName.toLowerCase().indexOf(stockinName.toLowerCase()) !== -1);
    }

    if (vendorName != undefined && vendorName != '') {
      this.dataSource =  this.dataSource.filter(item => item.vendor.toLowerCase().indexOf(vendorName.toLowerCase()) !== -1);
    }
  }
}
