import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  UsersClicked(){
    this.router.navigate(['admin','users']);
  }

  shopRequestsClicks(){
    this.router.navigate(['admin','shopRequests']);
  }


}
