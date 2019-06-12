import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CustomerInfoComponent } from './customer-info/customer-info.component';
=======
>>>>>>> b55cb9e385fea723560743466debb27663eaa6f3
import { AppSalesComponent } from './app-sales/app-sales.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddsalesComponent } from './addsales/addsales.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
<<<<<<< HEAD

const routes: Routes = [
  { component: CustomerInfoComponent, path: 'customer' },
=======
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { StockinComponent } from './stockin/stockin.component';
import { StockinListComponent } from './stockin-list/stockin-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
>>>>>>> b55cb9e385fea723560743466debb27663eaa6f3
  { path: 'sales', component: AddsalesComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component },
<<<<<<< HEAD
  { path: '**', redirectTo: 'sales'}
=======
  { path: 'vendor',component:VendorComponent },
  { path: 'vendor/:id',component:VendorComponent },
  { path: 'vendorlist',component:VendorListComponent },
  { path: 'stockin',component:StockinComponent },
<<<<<<< HEAD
  { path: 'stockinList',component:StockinListComponent },
  { path: 'customerInfo',component:CustomerInfoComponent },
  { path: 'customerList',component:CustomerListComponent },
=======
  { path: 'stockin/:id',component:StockinComponent },
  { path: 'stockinlist',component:StockinListComponent },
  { path: 'customerinfo',component:CustomerInfoComponent },
  { path: 'customerinfo/:id',component:CustomerInfoComponent },
  { path: 'customerlist',component:CustomerListComponent },
  { path: 'saleslist',component:SalesListComponent },

>>>>>>> 0966cd121840d22123b36fd26576e44ccb6ba73a
  { path: '**', redirectTo: 'sales'},
 
>>>>>>> b55cb9e385fea723560743466debb27663eaa6f3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
