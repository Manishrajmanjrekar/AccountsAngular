import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { AppSalesComponent } from './app-sales/app-sales.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddsalesComponent } from './addsales/addsales.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { StockinComponent } from './stockin/stockin.component';

const routes: Routes = [
  { component: CustomerInfoComponent, path: 'customer' },
  { path: 'sales', component: AddsalesComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
  { path: 'vendor',component:VendorComponent },
  { path: 'vendorList',component:VendorListComponent },
  { path: 'stockin',component:StockinComponent },
  { path: '**', redirectTo: 'sales'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
