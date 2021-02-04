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
  getSelectedArray:any[]=[];
  getSelectedArray1:any[];
  getShowArray:any;
  getShowArrayProduct:any;
  orderReceived:boolean=false;
  orderPacking:boolean=false;
  redyToDiliver:boolean=false;
  disabledOrderReceived:boolean=false;
  disabledOrderPacking:boolean=false;
  disabledRedyToDiliver:boolean=false;
  preOrderId:String;


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
      orderId:''
   }

  ngOnInit(): void {
    this.user = this.auth2.getUserDetails()._id;
    console.log(this.user)
    this.checkCartAuth.getall()
    .subscribe(  
      (res) => {
this.getFullArray=res
        this.getSelectedArray1 = this.getFullArray.filter(xx => xx.shopID === this.user);
        console.log(this.getSelectedArray1)
        for (var i = 0; i < this.getSelectedArray1.length; i++) {
          if (this.preOrderId != this.getSelectedArray1[i].orderId) {
            this.getSelectedArray.push(this.getSelectedArray1[i]);
          }
          else{
            this.getSelectedArray[i-1].total=Number(this.getSelectedArray1[i].total) + Number(this.getSelectedArray1[i-1].total)
          }
          this.preOrderId =  this.getSelectedArray[i].orderId;
        }
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
    this.checkCartAuth.getShopOrderListByOrderId(this.getShowArray.orderId).subscribe(  
      (res) => {
this.getShowArrayProduct=res;
      });

    if(value.state=="Order Received"){
      this.orderReceived=true;
    }
    if(value.state=="Order Packing"){
      this.orderPacking=true;
      this.disabledOrderReceived = true;
    }
    if(value.state=="Redy to Diliver"){
    this.redyToDiliver=true;
    this.disabledOrderReceived = true;
    this.disabledOrderPacking = true;
    }
    if(value.state!="Redy to Diliver" && value.state!="Order Packing" && value.state!="Order Received" && value.state!="Ordered Products"){
      // this.disabledRedyToDiliver=true;
      // this.disabledOrderReceived = true;
      // this.disabledOrderPacking = true;
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
      orderId:usercredentials.orderId,
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
  OrderPacking(value:any){
    this.credentials.state="Order Packing";
    this.changeState(value)
    window.location.reload();
  }

  changeState(id:String){
    // this.checkCartAuth.cartDataUpdate(id,this.credentials).subscribe(
      this.checkCartAuth.cartStateUpdate(id,this.credentials).subscribe(
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
