import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CustomerDetailsService, TokenPayload} from'../services/customer-reg.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  credentials:TokenPayload={
    _id:'',
    first_name:'',
    last_name:'',
    email:'',
    address:'',
    password:'',
    user_type:''
  }

  constructor(public auth:CustomerDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  SignupClicked(){
    this.router.navigate(['signup']);
  }

  Login(){
    this.auth.login(this.credentials).subscribe(
      ()=>{
       this.router.navigate(['/'])
      },
 
      err=>{
        console.error(err)
      }
     )
  }


}
