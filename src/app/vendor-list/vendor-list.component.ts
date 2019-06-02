import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  public submitted = false;
  public searchModel = new SearchVm();   
  public dataSource: VendorInfo[];
  public displayColInfo: any[];
  public firstName : string;

  constructor() { }

  ngOnInit() {
    this.displayColInfo = [
      { field: 'vendorId', header: 'Vendor Id' },
      { field: 'name', header: 'Vendor Name' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'referredBy', header: 'Referred By' },
      { field: 'mobile', header: 'Mobile' },
      { field: 'alternateMobile', header: 'Alternate Mobile' }
    ];

    this.dataSource = Vendors;
  }

  performSearch(){
    this.submitted = true;
    this.dataSource =  Vendors;
     // filter data
    if (this.searchModel.vendorName != undefined && this.searchModel.vendorName != '') {
      this.dataSource =  this.dataSource.filter(item => item.name.toLowerCase().indexOf(this.searchModel.vendorName.toLowerCase()) !== -1);
    }

    console.log(this.dataSource);
  }
}

// view models
export class SearchVm {
  customerName: string = '';
  vendorName: string = '';
  fromDate: string;
  toDate: string;
}

export class VendorInfo{
  vendorId: number;
  name: string;
  address: string;
  city: string;
  referredBy: string;
  mobile: string;
  alternateMobile: string;
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