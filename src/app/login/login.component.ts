import { Component, OnInit } from '@angular/core';
import{CustomerDetailsService, TokenPayload} from'../services/customer-reg.service';

import{Router} from'@angular/router'
import { last } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // credentials:TokenPayload={
  //   _id:'',
  //   full_name:'',
  //  // last_name:'',
  //   email:'',
  //   address:'',
  //   password:'',
  //   user_type:'cc'
  // }

  constructor(public auth:CustomerDetailsService,private router:Router) { 

  }

  ngOnInit(): void {


  }

  S_register(){
  //   this.auth.register(this.credentials).subscribe(
  //     ()=>{
  //      this.router.navigateByUrl('/')
  //     },
 
  //     err=>{
  //       console.error(err)
  //     }
  //    )
  }

  login(){
  
  //   this.auth.login(this.credentials).subscribe(
  //    ()=>{
  //     this.router.navigateByUrl('/'+this.auth.getUserDetails().user_type)
  //    },

  //    err=>{
  //      console.error(err)
  //    }
  //   )
  }

}
