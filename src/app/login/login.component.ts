import { Component, OnInit } from '@angular/core';
import{AuthenticationService, TokenPayload} from'../authentication.service'
import{Router} from'@angular/router'
import { last } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials:TokenPayload={
    _id:'',
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    // user_type:''
  }

  constructor(public auth:AuthenticationService,private router:Router) { 

  }

  ngOnInit(): void {
  }

  S_register(){
    this.auth.seller_register(this.credentials).subscribe(
      ()=>{
       this.router.navigateByUrl('/')
      },
 
      err=>{
        console.error(err)
      }
     )
  }

  login(){
  
    this.auth.login(this.credentials).subscribe(
     ()=>{
      this.router.navigateByUrl('/'+this.auth.getUserDetails().user_type)
     },

     err=>{
       console.error(err)
     }
    )
  }

}
