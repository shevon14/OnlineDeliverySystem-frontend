import { CustomerDetailsService } from '../services/customer-reg.service';
import { Component, OnInit, Input } from '@angular/core';
import { addcart, checkCartService } from '../services/Checkcart.service';
import { checkout } from '../models/checkout';
import { cartDetailsService } from '../services/cart.service';
import { addproduct, productDetailsService } from '../services/product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  tatal:string;
  date1:Date;
  date2:number;
  user:string;
  dataTest1:any;
  dataTest2:addcart[]=new Array<addcart>();
  productArray: any;
  productByshop: any;
  chackstate:boolean=true;
  constructor(private auth2 : CustomerDetailsService,
    private cartAuth:cartDetailsService,
    private checkCartAuth:checkCartService,
    public auth:productDetailsService,
  ){ }

  @Input() set Total (value:string){
    this.tatal = value;
    console.log(this.tatal)

    this.date1 = new Date();
    //this.date2=this.date1.setDate( this.date1.getDate() + 7);
    this.date1.setDate( this.date1.getDate() + 7);
  }

  @Input() set cartDetails (value:addcart[]){
    this.dataTest1 = value;
    console.log(this.dataTest2)
  }

  credentials:addcart={
    u_id:'',
    productId: '',
    productName:'',
    uniPrice: '',
    quantity: '',
    address: '',
    mobileNumber: '',
    customerName : '',
    email:'',
    payment:'Cash On Delivery',
    total:'',
    state:'Ordered Products',
    shopId:'',
    orderId:'',
    date:new Date()
   };
addProductData :addproduct= {
    _id: '',
    productName: '',
    uniPrice: '',
    availableQuantity: '',
    category: '',
    imgName : '',
    shopName: '',
    shopID : '',
    }
  ngOnInit(): void {
    this.user = this.auth2.getUserDetails()._id;

    

  var details = this.auth2.getUserDetails();
  this.credentials.customerName = this.auth2.getUserDetails().full_name;
  this.credentials.email = this.auth2.getUserDetails().email;
  this.credentials.address = this.auth2.getUserDetails().address;
  this.credentials.mobileNumber = this.auth2.getUserDetails().conatct;
  
  this.getalldata();
  
  
  }
  confirmOrder(){
    console.log(this.dataTest1)
    let  dataRead2: checkout=new checkout() 
    let dateFormat = require('dateformat');
let now = new Date();

console.log(dateFormat(now, "ddmmyyyyhMM"));
    for (let i = 0; i <  this.dataTest1.length ; i++) {   

      dataRead2.u_id=this.dataTest1[i].u_id,
      dataRead2.productId=this.dataTest1[i].productId,
      dataRead2.productName=this.dataTest1[i].productName,
      dataRead2.uniPrice= this.dataTest1[i].uniPrice,
      dataRead2.total= this.dataTest1[i].total,
      dataRead2.shopId=this.dataTest1[i].shopID,
      dataRead2.quantity= this.dataTest1[i].quantity,
      dataRead2.address=  this.credentials.address,
      dataRead2.mobileNumber= this.credentials.mobileNumber,
      dataRead2.customerName= this.credentials.customerName,
      dataRead2.email= this.credentials.email,
      dataRead2.payment=this.credentials.payment,
      dataRead2.state=this.credentials.state,
      dataRead2.orderId=this.dataTest1[i].shopID+dateFormat(now, "ddmmyyyyhhMM").toString()+this.credentials.mobileNumber,
      dataRead2.date= this.date1
        // dataRead3=dataRead2
        this.dataTest2.push(dataRead2)
        this.addcheckout(dataRead2)
    
      
        this.reduceCount(dataRead2.productId,dataRead2.quantity);
  }
  this.removedetails();
  

//   this.dataRead.forEach(obj => {
//     obj.forEach(childObj=> {
//       this.ddataRead2ataRead2= this.dataRead;
//    });
// });
// this.dataRead2.push({key:"asd"  value:"ddd"})

// let  dataRead3: addcart=new checkout() 

//   // this.addcheckout(dataRead2)
//   console.log(this.dataTest2);
  // console.log(dataRead3);
};




addcheckout(add:addcart){
 this.checkCartAuth.add(add)
 .subscribe(  
    (res) => {
      // this.router.navigate([''])
      console.log(res)
    },

    err => {
      console.error(err)
    }
  )
// this.router.navigate(['payment'])
// window.location.reload();

}
removedetails(){
  this.cartAuth.removeCart(this.user)
.subscribe(  
  (res) => {
    // this.router.navigate([''])
    console.log(res)
    this.chackstate=false;
    // this.cartDetails= res
    window.location.reload();
  },

  err => {
    console.error(err)
  }
)
}

getCash(){
  this.credentials.payment="Cash On Delivery"
}
getCard(){
  this.credentials.payment="Card Payment"
}

reduceCount(code,quantity){
  this.productByshop = this.productArray.filter(xx => xx._id == code);
  // if(this.chackstate){
    
  var AvailableQuantity=this.productByshop[0].availableQuantity;
  this.addProductData.availableQuantity=(AvailableQuantity-quantity).toString();
  this.auth.productUpdatedQuntity(code,this.addProductData).subscribe(
    ()=>{ 
      console.log("asd")
    },

    err=>{
      console.error(err)
    }
  )
  return true;
  // }
  }

  getalldata(){
    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list;
      console.log(this.productArray);
    });
  }

}
