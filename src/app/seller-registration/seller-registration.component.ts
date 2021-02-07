// import { Router } from '@angular/router';
// import { SellerDetailsService } from './../services/seller-details.service';
// import {FormControl, FormGroup, Validators} from "@angular/forms";
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-seller-registration',
//   templateUrl: './seller-registration.component.html',
//   styleUrls: ['./seller-registration.component.scss']
// })
// export class SellerRegistrationComponent implements OnInit {

//   sellerForm = new FormGroup({
//     businessModel: new FormControl(''), 
//     name:new FormControl(''), 
//     shopName: new FormControl(''), 
//     businessID:new FormControl(''), 
//     address: new FormControl(''), 
//     personalPhone: new FormControl(''), 
//     officePhone: new FormControl(''), 
//     email: new FormControl(''), 
//     password: new FormControl(''), 
//     repassword: new FormControl('')
//   });

//   validatingForm: FormGroup;

//   constructor( private sellerDetailsService: SellerDetailsService,
//                 private router : Router ) { }

//   ngOnInit(): void {
//     this.validatingForm = new FormGroup({
//       signupFormModalBusinessModel: new FormControl(''),
//       signupFormModalName: new FormControl('', Validators.required),
//       signupFormModalShopName: new FormControl('', Validators.required),
//       signupFormModalBusinessID: new FormControl('', Validators.required),
//       signupFormModalPersonalPhone: new FormControl('', Validators.required),
//       signupFormModalOfficePhone: new FormControl('', Validators.required),
//       signupFormModalAddress: new FormControl('', Validators.required),
//       signupFormModalEmail: new FormControl('', Validators.required),
//       signupFormModalPassword: new FormControl('', Validators.required),
//       signupFormModalRePassword: new FormControl('', Validators.required),
//     });
//   }

//   get signupFormModalBusinessModel() {
//     return this.validatingForm.get('signupFormModalBusinessModel');
//   }

//   get signupFormModalName() {
//     return this.validatingForm.get('signupFormModalName');
//   }

//   get signupFormModalShopName() {
//     return this.validatingForm.get('signupFormModalShopName');
//   }

//   get signupFormModalBusinessID() {
//     return this.validatingForm.get('signupFormModalBusinessID');
//   }
//   get signupFormModalPersonalPhone() {
//     return this.validatingForm.get('signupFormModalPersonalPhone');
//   }

//   get signupFormModalOfficePhone() {
//     return this.validatingForm.get('signupFormModalOfficePhone');
//   }
//   get signupFormModalAddress() {
//     return this.validatingForm.get('signupFormModalAddress');
//   }
//   get signupFormModalEmail() {
//     return this.validatingForm.get('signupFormModalEmail');
//   }
//   get signupFormModalPassword() {
//     return this.validatingForm.get('signupFormModalPassword');
//   }
//   get signupFormModalRePassword() {
//     return this.validatingForm.get('signupFormModalRePassword');
//   }

//   registerSeller(){
//     let password = this.sellerForm.value.password;
//     let repassword = this.sellerForm.value.repassword;
//     if (password === repassword) {
//       this.sellerDetailsService.addNewSeller(this.signupFormModalBusinessModel.value,
//       this.signupFormModalName.value, this.signupFormModalShopName.value,this.signupFormModalBusinessID.value, 
//       this.signupFormModalAddress.value, this.signupFormModalPersonalPhone.value,this.signupFormModalOfficePhone.value, 
//       this.signupFormModalEmail.value, this.signupFormModalPassword.value, this.signupFormModalOfficePhone.value
//       ).subscribe(
//           data => {console.log(data)},
//         err => console.log(err
//       ));
//       this.router.navigate(['myStore']);
//     }else{
//       console.log("Password does not match....")
//     }
//   }

// }

import { Router } from '@angular/router';
import { SellerDetailsService,TokenPayload } from '../services/seller-details.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})


export class SellerRegistrationComponent implements OnInit {

  sellerForm = new FormGroup({
    businessModel: new FormControl(''), 
    name:new FormControl(''), 
    shopName: new FormControl(''), 
    businessID:new FormControl(''), 
    address: new FormControl(''), 
    personalPhone: new FormControl(''), 
    officePhone: new FormControl(''), 
    email: new FormControl(''), 
    password: new FormControl(''), 
    repassword: new FormControl('')
  });

  validatingForm: FormGroup;

   
  credentials:TokenPayload={
    _id : '',
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
 
  constructor( private sellerDetailsService: SellerDetailsService,
                private router : Router ) { }
                
  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      signupFormModalBusinessModel: new FormControl(''),
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalShopName: new FormControl('', Validators.required),
      signupFormModalBusinessID: new FormControl('', Validators.required),
      signupFormModalPersonalPhone: new FormControl('', Validators.required),
      signupFormModalOfficePhone: new FormControl('', Validators.required),
      signupFormModalAddress: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.required),
      signupFormModalPassword: new FormControl('', Validators.required),
      signupFormModalRePassword: new FormControl('', Validators.required),
    });
  }

  get signupFormModalBusinessModel() {
    return this.validatingForm.get('signupFormModalBusinessModel');
  }
  
  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalShopName() {
    return this.validatingForm.get('signupFormModalShopName');
  }

  get signupFormModalBusinessID() {
    return this.validatingForm.get('signupFormModalBusinessID');
  }
  get signupFormModalPersonalPhone() {
    return this.validatingForm.get('signupFormModalPersonalPhone');
  }

  get signupFormModalOfficePhone() {
    return this.validatingForm.get('signupFormModalOfficePhone');
  }
  get signupFormModalAddress() {
    return this.validatingForm.get('signupFormModalAddress');
  }
  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }
  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }
  get signupFormModalRePassword() {
    return this.validatingForm.get('signupFormModalRePassword');
  }

  registerSeller(){

    let password = this.sellerForm.value.password;
    let repassword = this.sellerForm.value.repassword;
    if (password === repassword){

  console.log(this.credentials)
  // }


  this.sellerDetailsService.addNewSeller1 (this.credentials).subscribe(
    data => {
      if(data.error!=undefined){
        alert(data.error)
      }
      else{
        this.router.navigate(['myStore']);
      }
      console.log(data)},
  err => {
    alert(err.error.error)}
);

}
else{
  console.log("Password does not match....")
}
}

}


