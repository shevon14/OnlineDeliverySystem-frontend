import { Component, OnInit } from '@angular/core';
import{CustomerDetailsService, TokenPayload} from'../services/customer-reg.service';
import{Router} from'@angular/router'
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  credentials:TokenPayload={
    _id:'',
    first_name:'',
    last_name:'',
    email:'',
    address:'',
    password:'',
    user_type:'customer'
  }


  constructor(public auth:CustomerDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  c_register(){
    this.auth.register(this.credentials).subscribe(
      ()=>{
       this.router.navigateByUrl('/')
      },
 
      err=>{
        console.error(err)
      }
     )
  }



}
