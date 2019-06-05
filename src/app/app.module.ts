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
<<<<<<< HEAD
=======
import { VendorComponent } from './vendor/vendor.component';
import { StockinComponent } from './stockin/stockin.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StockinListComponent } from './stockin-list/stockin-list.component';
>>>>>>> b55cb9e385fea723560743466debb27663eaa6f3

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
<<<<<<< HEAD
    Test3Component
=======
    Test3Component,
    VendorComponent,
    StockinComponent,
    VendorListComponent,
    GenericTableComponent,
    CustomerListComponent,
    StockinListComponent
>>>>>>> b55cb9e385fea723560743466debb27663eaa6f3
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
