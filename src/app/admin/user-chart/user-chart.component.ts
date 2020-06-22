import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserDetails } from '../../authentication.service';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss']
})
export class UserChartComponent implements OnInit {

elements: UserDetails

  @ViewChild(MdbTableDirective,
    { static: true }) 
    mdbTable: MdbTableDirective;
  headElements = ['ID', 'Owner Name', 'Shop Name', 'Address', 'Conatact'];
  searchText: string = '';
  previous: string;

  public user_type_name;
  constructor(private router: ActivatedRoute , private auth:AuthenticationService) { }
  @HostListener('input')
  oninput() {
    this.searchItems();
  }
 
   ngOnInit() {
    this.auth.detailes().subscribe(
      user=>{
        this.elements=user
    this.mdbTable.setDataSource(this.elements); this.previous =
    this.mdbTable.getDataSource();
        console.log(user)
      },
      err =>{
        console.error(err)
      }
    )

    let type = this.router.snapshot.paramMap.get('type_name');
    this.user_type_name = type;
    console.log(this.user_type_name);

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
