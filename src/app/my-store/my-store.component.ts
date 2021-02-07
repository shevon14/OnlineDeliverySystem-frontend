import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SellerDetailsService,TokenPayload } from '../services/seller-details.service';

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
    if(localStorage.getItem("seller")!=undefined){
      this.router.navigate(['seller']);
    }
  }

  LogInClicked(){ 

    this.sellerDetailsService.login(this.credentials).subscribe(
      (res)=>{

        
        if(res.error!=undefined){
          alert(res.error)

        }
        if(res.error==undefined){
        localStorage.setItem("seller",res.token)
        localStorage.setItem("token",res.token)
        this.router.navigate(['seller']);
        }
       // this.router.navigate(['seller']);
       
       console.log(this.credentials)
        console.log(res);
      },
 
      err=>{
        //this.router.navigate(['']);
        console.log("error ekak")
      }
     )
    
  }

}
