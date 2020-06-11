import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onRegisterClicked(){
    this.router.navigate(['sellerRegistration']);
  }

  MyStoreClicked(){
    this.router.navigate(['myStore']);
  }

  LoginClicked(){
    this.router.navigate(['login']);
  }

}
