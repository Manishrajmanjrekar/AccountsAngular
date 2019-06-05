import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
 // import { AppSalesComponent } from './app-sales/AppSalesComponent';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { MegaMenuModule } from './megamenu/megamenu';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppSalesComponent } from './app-sales/app-sales.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MegamenuComponent } from './megamenu-component/megamenu.component';
import { AddsalesComponent } from './addsales/addsales.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { VendorComponent } from './vendor/vendor.component';
import { StockinComponent } from './stockin/stockin.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StockinListComponent } from './stockin-list/stockin-list.component';
import { SalesListComponent } from './Sales/sales-list/sales-list.component';
import { SalesEditComponent } from './Sales/sales-edit/sales-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContactFormComponent,
    AppSalesComponent,
    CustomerInfoComponent,
    MegamenuComponent,
    AddsalesComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    VendorComponent,
    StockinComponent,
    VendorListComponent,
    GenericTableComponent,
    CustomerListComponent,
    StockinListComponent,
    SalesListComponent,
    SalesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AppSalesComponent]
})
export class AppModule { }
