import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CustomerDetailsService, TokenPayload} from'../services/customer-reg.service';
import { SellerDetailsService } from '../services/seller-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

viewLogin:boolean=true;
checkState:string="";
// checkState1:string="";
firstName="hhh";
// lastName:string;


  constructor(private router: Router,
              public auth:CustomerDetailsService,
            public auth1:SellerDetailsService) {}

  ngOnInit(): void {
    var checkState2=this.auth.getUserDetails();
    var checkState1=this.auth1.getUserDetails();
    // console.log(checkState2)
    console.log("aagg")

    if(checkState2!=null){
      this.viewLogin=false;
      this.firstName=this.auth.getUserDetails().full_name
    }
    if(checkState1!=null){
      this.viewLogin=false;
      this.firstName=this.auth1.getUserDetails().name
      console.log(this.auth1.getUserDetails())
    }
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
    localStorage.removeItem("seller");
    localStorage.removeItem("token");
    // frame.show()
    this.router.navigate(['']);
    window.location.reload();
  }

  Contact(){
    this.router.navigate(['contact']);
  }

  About(){
    this.router.navigate(['aboutus']);
  }
  
  home(){
    this.router.navigate(['']);
  }

}
