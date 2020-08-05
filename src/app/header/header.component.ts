import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CustomerDetailsService, TokenPayload} from'../services/customer-reg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,public auth:CustomerDetailsService,) {}

  ngOnInit(): void {
  }

  onRegisterClicked(){
    this.router.navigate(['sellerRegistration']);
  }

  MyStoreClicked(){
    this.router.navigate(['myStore']);
  }

  MyCartClicked(){
    this.router.navigate(['cart']);
  }

  MyProfileClicked(){
    this.router.navigate(['myProfile']);
  }

  MyOrderHistoryClicked(){
    this.router.navigate(['orderHistory']);
  }

  SinginClicked(){
    this.router.navigate(['signin']);
  }
  SingupClicked(){
    this.router.navigate(['signup']);
  }

  seeAllProducts(){
    this.router.navigate(['products']);
  }

  ////seller sign out ekata
  SignOutClicked(){
    this.auth.logout();
    this.router.navigate(['']);
  
  }


}
