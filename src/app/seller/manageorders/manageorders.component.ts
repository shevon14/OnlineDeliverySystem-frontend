import { Component, OnInit } from '@angular/core';
import { checkCartService, addcart } from '../../services/Checkcart.service';
import { CustomerDetailsService } from '../../services/customer-reg.service';
import { adddeliverycart, deliveryCartService } from '../../services/deliverycart.service';

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
  orderReceived:boolean=false;
  orderPacking:boolean=false;
  redyToDiliver:boolean=false;


  constructor(
    private auth2: CustomerDetailsService, private checkCartAuth:checkCartService,
    private auth3:deliveryCartService) { }

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

    if(value.state=="Order Received"){
      this.orderReceived=true;
    }
    if(value.state=="Order Packing"){
      this.orderPacking=true;
    }
    if(value.state=="Redy to Diliver"){
    this.redyToDiliver=true;
    }
  }

  OrderReceived(value:any){
 this.credentials.state="Order Received";
 console.log(value)
 this.changeState(value)
 window.location.reload();
  }

  RedyToDiliver(value:any,usercredentials:any){
    this.credentials.state="Redy to Diliver";
    this.changeState(value)

    const deliveryCart = <adddeliverycart>{
      u_id:usercredentials.u_id,
      productId: usercredentials.productId,
      productName: usercredentials.productName,
      uniPrice: usercredentials.uniPrice,
      quantity:usercredentials.quantity,
      address:usercredentials.address,
      mobileNumber: usercredentials.mobileNumber,
      customerName: usercredentials.customerName,
      email:usercredentials.email,
      payment:usercredentials.payment,
      total:usercredentials.total,
      state:this.credentials.state,
      shopId:usercredentials.shopID,
      deliverPersonId:null,
      orderId:value,
    }
    this.auth3.add(deliveryCart).subscribe(  
      (res) => {
        // this.router.navigate([''])
        console.log(deliveryCart)
        console.log(res)
      },

      err => {
        console.error(err)
      }
    )
    window.location.reload();
  }
  OrderComplete(value:any){
    this.credentials.state="Order Packing";
    this.changeState(value)
    window.location.reload();
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
