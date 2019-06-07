import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})

export class GenericTableComponent implements OnInit {

  @Input() dataSource: any[] = [];
  @Input() displayColInfo: any[] = [];
  dataSourceKeys: any[];

  constructor() { }

  ngOnInit() {
    this.dataSourceKeys = (this.dataSource && this.dataSource.length > 0) ?  Object.keys(this.dataSource[0]) : [];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = this.dataSource; 
  }

}
