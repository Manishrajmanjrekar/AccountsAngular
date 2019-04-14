// import { Component } from '@angular/core';
import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { AppSalesComponent } from './app-sales/app-sales.component';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MenuItem } from '../app/common/api';
// import { AppSalesComponent } from '../app/app-sales/AppSalesComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-Accounts';

  // tslint:disable-next-line:variable-name
  constructor() { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

}
export class SalesInfo {
  custInfo: Array<any>;
  vendorInfo: Array<any>;
  Price: number;
  Quantity: number;
  Total: number;
}
