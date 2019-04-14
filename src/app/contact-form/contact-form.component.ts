import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public vendorname: any;
 vendorNames = [
   {id: 1, name: 'rams'},
   {id: 2, name: 'ganesha'},
  ];

  public sales: Sales;

  constructor() { }
  Calculate(event, value) {
     // console.log("name of Control:"+event," value:" +value);
    // let nameControl = new FormControl("1Price");
     // let values = nameControl..value; // -> Nate
     console.log(event);
  }
  ngOnInit() {
    this.sales = new Sales();
    this.sales.vendorNames = [
      {id: 1, name: 'rams'},
      {id: 2, name: 'ganesha....'},

    ];
    this.sales.customerNames = [
      {id: 1, name: 'rams'},
      {id: 2, name: 'ganesha....'},

    ];
  }

}

export class Sales {
  public vendorNames: Array<any>;
  public customerNames: Array<any>;
  public Price: number;
  public Quantity: number;
  public Total: number;
}


