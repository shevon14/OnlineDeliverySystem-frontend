import { Component, OnInit } from '@angular/core';
import { checkCartService, addcart } from '../../services/Checkcart.service';
import { CustomerDetailsService } from '../../services/customer-reg.service';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manageorders.component.html',
  styleUrls: ['./manageorders.component.scss']
})
export class ManageordersComponent implements OnInit {

  startView:boolean=false;
  startViewTable:boolean=true;
  user:String;
  getFullArray:any
  getSelectedArray:any;
  getShowArray:any;



  constructor(
    private auth2: CustomerDetailsService, private checkCartAuth:checkCartService) { }

    credentials:addcart={
      u_id: '',
      productId: '',
      productName: '',
      uniPrice: '',
      quantity: '',
      address: '',
      mobileNumber: '',
      customerName: '',
      email:'',
      payment:'',
      total:'',
      state:'',
      shopId:'',
   }

  ngOnInit(): void {
    this.user = this.auth2.getUserDetails()._id;
    console.log(this.user)
    this.checkCartAuth.getall()
    .subscribe(  
      (res) => {
this.getFullArray=res
        this.getSelectedArray = this.getFullArray.filter(xx => xx.shopID === this.user);
        console.log(this.getSelectedArray)
      },

      err => {
        console.error(err)
      }
    )

    
    
  }

  openData(value:any){
    this.startView=true;
    this.startViewTable=false;
    this.getShowArray=value;
  }

  OrderReceived(){
 this.credentials.state="Order Received";
//  console.log(value._id)
//  /this.changeState(value._id)
  }

  RedyToDiliver(){
    this.credentials.state="Redy to Diliver";
  }
  OrderComplete(){
    this.credentials.state="Order Complete";
  }

  changeState(id:String){
    this.checkCartAuth.cartDataUpdate(id,this.credentials).subscribe(
      ()=>{ 
        console.log(this.credentials)
        //this.router.navigate(['seller'])
      },
 
      err=>{
        console.error(err)
      }
    )
  }
}
