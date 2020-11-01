import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SellerDetailsService,TokenPayload } from './../services/seller-details.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {

  credentials:TokenPayload={
    _id: '',
    businessModel:'',
    name:'',
    shopName:'',
    businessID:'', 
    address:'', 
    personalPhone: '',
    officePhone:  '', 
    email: '', 
    password: ''
  }


  constructor(private router: Router,
    private sellerDetailsService: SellerDetailsService) { }

  ngOnInit(): void {
  }

  LogInClicked(){ 

    this.sellerDetailsService.login(this.credentials).subscribe(
      (res)=>{
       console.log(this.credentials)
        console.log(res)
       // this.router.navigate(['seller']);
      },
 
      err=>{
        //this.router.navigate(['']);
        console.log("error ekak")
      }
     )
    
  }

}
