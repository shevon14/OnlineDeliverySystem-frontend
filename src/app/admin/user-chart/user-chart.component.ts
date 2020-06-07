import { Component, OnInit, ViewChild, HostListener} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';

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

  public user_type_name;
  constructor(private router:ActivatedRoute) { }
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
    ];

    let type=this.router.snapshot.paramMap.get('type_name');
    this.user_type_name=type;
    // console.log(this.user_type_name);

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
