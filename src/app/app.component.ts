//import { Component } from '@angular/core';
import { Component, 
  OnInit, 
  ViewChild, 
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
import { AppSalesComponent } from './app-sales/app-sales.component';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
  //import { AppSalesComponent } from '../app/app-sales/AppSalesComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-Accounts';
  items: any;
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;

   constructor(private _cfr: ComponentFactoryResolver) { }
   ngOnInit(){ }

  addComponent(){    
      var comp = this._cfr.resolveComponentFactory(AppSalesComponent);
      var appSalesComponent = this.container.createComponent(comp);
      appSalesComponent.instance._ref = appSalesComponent;
  }
  OnSubmit($event: Event) {
   // $event.preventDefault();
   console.log('save form called')
    this.items =event;
    console.log(this.items)
   
}
}
export class SalesInfo{
  custInfo:Array<any>;
  vendorInfo:Array<any>;
  Price:number;
  Quantity:number;
  Total:number;
}