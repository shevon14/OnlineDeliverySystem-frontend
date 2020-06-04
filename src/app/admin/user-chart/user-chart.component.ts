import { Component, OnInit, ViewChild, HostListener} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements OnInit {

  @ViewChild(MdbTableDirective,
    { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['ID', 'Name', 'Owner', 'Adress'];
  searchText: string = '';
  previous: string;
  constructor() { }
  @HostListener('input')
  oninput() {
    this.searchItems();
  } ngOnInit() {
    this.elements=[
      {
        "id":1,
        "name":"aa",
        "owner":"owbb",
        "address":"2424,wff,dgf"
      },{
        "id":2,
        "name":"aabb",
        "owner":"owbb",
        "address":"2424,wff,dgf"
      },{
        "id":3,
        "name":"aacc",
        "owner":"owbb",
        "address":"2424,wff,dgf"
      }
    ]
  

    //  for (let i = 1; i <= 10; i++) {
    //   this.elements.push({
    //     id:
    //       i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' +
    //         i
    //   });
    // }
    this.mdbTable.setDataSource(this.elements); this.previous =
      this.mdbTable.getDataSource();
  } searchItems() {
    const prev =
      this.mdbTable.getDataSource(); if (!this.searchText) {
        this.mdbTable.setDataSource(this.previous); this.elements =
          this.mdbTable.getDataSource();
      } if (this.searchText) {
      this.elements =
        this.mdbTable.searchLocalDataBy(this.searchText);
        this.mdbTable.setDataSource(prev);
      }
  }
}
