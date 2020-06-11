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
  headElements = ['ID', 'Owner Name', 'Shop Name', 'Address', 'Conatact'];
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
        "id":"#0101",
        "OwnerName":"AAAA",
        "ShopName":"ABC Pvt,Ltd.",
        "address":"N0.26/a, Galle Road, Colombo 04.",
        "contact" : "011-3547891"
      },
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
