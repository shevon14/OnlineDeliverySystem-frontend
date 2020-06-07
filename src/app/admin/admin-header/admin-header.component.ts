import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})

export class AdminHeaderComponent implements OnInit {
  
  
user_types=[
{"id":1,"type_name":"Customers"},
{"id":2,"type_name":"Sealles"},
{"id":3,"type_name":"Admin"},
{"id":4,"type_name":"Delivers"},
]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  UsersClicked(user_types){
    this.router.navigate(['admin','users',user_types.type_name]);
  }

  shopRequestsClicks(){
    this.router.navigate(['admin','shopRequests']);
  }

}