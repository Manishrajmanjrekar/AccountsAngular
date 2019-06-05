import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

import { SalesListSearchModel } from 'src/app/model/SalesListSearchModel';
import { SalesList } from 'src/app/model/saleslist';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
   vendorId:number;
  searchData: string;
  vendorList: Array<Vendor>;
  salesList: SalesList[];
  salesColumns:Array<string>;

  constructor() {


  }

  ngOnInit() {
    this.vendorList = this.getVendorList();
    this.salesList =this.getSalesByVendor(null);
    if (this.salesList.length > 0) {
      const temp = this.salesList[0];
      this.salesColumns = Object.getOwnPropertyNames(temp);
      console.log(this.salesColumns);
    }

  }

  getVendorList(): Array<Vendor> {
    this.vendorList = new Array<Vendor>();
    for (let i = 0; i < 10; i++) {
      this.vendorList.push({ Id: i, Name: "test" + i });
    }
    return this.vendorList;

  }


  getSalesByVendor(searchData:SalesList):Array<SalesList>{
    
    this.salesList = new Array<SalesList>();
    for(let i =0;i<10;i++){
           this.salesList.push({vendorName:"vendor"+i,customerName :"customer"+i,
           Price:7,Quantity:100,Total:1745 });
    }

    return this.salesList;
  }

}




