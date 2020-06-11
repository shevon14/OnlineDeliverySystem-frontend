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
    user_type:''
  }

  constructor(private auth:AuthenticationService,private router:Router) { 

  }

  ngOnInit(): void {
  }

  login(){
  
    this.auth.login(this.credentials).subscribe(
     ()=>{
      this.router.navigateByUrl('/admin')
     },
     err=>{
       console.error(err)
     }
    )
  }

}
