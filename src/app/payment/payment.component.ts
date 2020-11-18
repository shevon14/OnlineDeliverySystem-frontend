import { CustomerDetailsService } from '../services/customer-reg.service';
import { Component, OnInit, Input } from '@angular/core';
import { addcart, checkCartService } from '../services/Checkcart.service';
import { checkout } from '../models/checkout';
import { cartDetailsService } from '../services/cart.service';
import { addproduct } from '../services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  tatal:string;
  date:Date;
  user:string;
  dataTest1:addcart[]=new Array<addcart>();
  dataTest2:addcart[]=new Array<addcart>();
  constructor(private auth2 : CustomerDetailsService,
    private cartAuth:cartDetailsService,
    private checkCartAuth:checkCartService){ }

  @Input() set Total (value:string){
    this.tatal = value;
    console.log(this.tatal)

    this.date = new Date();
    this.date.setDate( this.date.getDate() + 7);
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
    payment:''
   }

  ngOnInit(): void {
    this.user = this.auth2.getUserDetails()._id;

    

  var details = this.auth2.getUserDetails();
  this.credentials.customerName = this.auth2.getUserDetails().full_name;
  this.credentials.email = this.auth2.getUserDetails().email;
  this.credentials.address = this.auth2.getUserDetails().address;
  this.credentials.mobileNumber = this.auth2.getUserDetails().conatct;
  
  }
  confirmOrder(){
    let  dataRead2: checkout=new checkout() 
    for (let i = 0; i <  this.dataTest1.length ; i++) {   

      dataRead2.u_id=this.dataTest1[i].u_id,
      dataRead2.productId=this.dataTest1[i].productId,
      dataRead2.productName=this.dataTest1[i].productName,
      dataRead2.uniPrice= this.dataTest1[i].uniPrice,
      dataRead2.quantity= this.dataTest1[i].quantity,
      dataRead2.address=  this.credentials.address,
      dataRead2.mobileNumber= this.credentials.mobileNumber,
      dataRead2.customerName= this.credentials.customerName,
      dataRead2.email= this.credentials.email
      dataRead2.payment= this.credentials.payment
      

        // dataRead3=dataRead2
        this.dataTest2.push(dataRead2)
        this.addcheckout(dataRead2)

        this.cartAuth.removeCart(this.user)
        .subscribe(  
          (res) => {
            // this.router.navigate([''])
            console.log(res)
            // this.cartDetails= res
            // window.location.reload();
          },
      
          err => {
            console.error(err)
          }
        )


  }

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
}


}
