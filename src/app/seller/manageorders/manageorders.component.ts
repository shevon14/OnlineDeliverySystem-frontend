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
  date1:Date;


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
      orderId:'',
      date:new Date()
   }

  ngOnInit(): void {
    this.date1 = new Date();
    //this.date2=this.date1.setDate( this.date1.getDate() + 7);
    this.date1.setDate( this.date1.getDate() + 7);
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
            var j=this.getSelectedArray.length -1;
          }
          else{
            this.getSelectedArray[j].total=Number(this.getSelectedArray[j].total) + Number(this.getSelectedArray1[i].total)
          }
          this.preOrderId =  this.getSelectedArray[j].orderId;
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
for(var i=0;i<this.getShowArrayProduct.length; i++){
  const deliveryCart = <adddeliverycart>{
    u_id:usercredentials.u_id,
    productId: this.getShowArrayProduct[i].productId,
    productName: this.getShowArrayProduct[i].productName,
    uniPrice: this.getShowArrayProduct[i].uniPrice,
    quantity:this.getShowArrayProduct[i].quantity,
    address:this.getShowArrayProduct[i].address,
    mobileNumber: this.getShowArrayProduct[i].mobileNumber,
    customerName: this.getShowArrayProduct[i].customerName,
    email:this.getShowArrayProduct[i].email,
    payment:this.getShowArrayProduct[i].payment,
    total:this.getShowArrayProduct[i].total,
    state:"Redy to Diliver",
    shopId:this.getShowArrayProduct[i].shopID,
    deliverPersonId:null,
    orderId:this.getShowArrayProduct[i].orderId,
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
    
  }
  OrderPacking(value:any){
    this.credentials.state="Order Packing";
    this.changeState(value)
    window.location.reload();
  }

  changeState(id:String){
    this.credentials.date=this.date1
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
