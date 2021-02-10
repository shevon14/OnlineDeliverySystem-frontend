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
    full_name:'',
    conatct:'',
   // postalcode: '',
    email:'',
    address:'',
    postalcode:'',
    password:'',
    user_type:'customer'
  }
  credentials1:any={
    rpassword:''
  }

  constructor(public auth:CustomerDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  c_register(){
    if(this.credentials.password==this.credentials1.rpassword){
      this.auth.register(this.credentials).subscribe(
        (res)=>{
  
          if(res.error!=undefined){
            alert(res.error)
          }
          else{
         this.router.navigateByUrl('signin')
         console.log(this.credentials)
        }
        },
   
        err=>{
          alert(err.error.error)
        }
       )
    }
    else{
      alert("Password does not match....")
    }
    
  }



}
