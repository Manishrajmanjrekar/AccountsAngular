import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, 
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
 // import { AppSalesComponent } from './app-sales/AppSalesComponent';

import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppSalesComponent } from './app-sales/app-sales.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ContactFormComponent,
    AppSalesComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AppSalesComponent]
})
export class AppModule { }
