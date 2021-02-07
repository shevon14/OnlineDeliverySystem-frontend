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
    _id: '',
    full_name: '',
    conatct:'',
    email: '',
    address:'',
    postalcode:'',
    password: '',
    user_type: ''
  }

  constructor(public auth:CustomerDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  SignupClicked(){
    this.router.navigate(['signup']);
  }

  Login(){
    this.auth.login(this.credentials).subscribe(
      (res)=>{
       // this.router.navigateByUrl('/'+this.auth.getUserDetails().user_type)
       if(res.error!=undefined){
         alert(res.error)
       }
       console.log(this.credentials)
       console.log(res)
      },
 
      err=>{
        alert(err.error.error)
      }
     )
  }

  
    //   data => {console.log(data)},
    //   err => console.log(err
    // ));
    // this.router.navigate(['admin']);
     
  // }

}
