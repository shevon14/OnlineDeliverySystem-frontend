import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { cartDetailsService } from '../services/cart.service';
import { CustomerDetailsService, UserDetails } from '../services/customer-reg.service';
import { productDetailsService } from '../services/product.service';
import { checkCartService , addcart } from '../services/Checkcart.service';
import { CartDetails } from '../models/cartDetails';
import { checkout } from '../models/checkout';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  details:UserDetails
  cartDetails:CartDetails
  price:number;
  viewPrice:number;

  total:any;
  date:Date;
  viewTotal:number;
  user:String;
  showPayment:boolean=false;
  showCart:boolean=true;
  // dataRead:CartDetails;
  dataTest2:addcart[]=new Array<addcart>();
  

  constructor(private router: Router,
              private cartAuth:cartDetailsService,
              private auth2: CustomerDetailsService,
              private productAuth :productDetailsService,
              private checkCartAuth:checkCartService) { }

  // elements: any = [
  //   {id: 1, name: 'rolex watch', quantity: '1', price: 'Rs.3000'},
  //   {id: 2, name: 'head set', quantity: '2', price: 'Rs.1920'},
  //   {id: 3, name: 'mobile charger', quantity: '1', price: 'Rs.600'},
  // ];

  headElements = ['ID', 'Name', 'Qtn.', 'Unit Price', '' ,'Remove'];

  ngOnInit(): void {
    this.viewTotal=0;
   this.user = this.auth2.getUserDetails()._id;
    console.log(this.user)
    this.cartAuth.cartDetails(this.user)
    .subscribe(  
      (res) => {
        this.cartDetails= res

        console.log(Object.keys(this.cartDetails).length)
    for (let i = 0; i <  Object.keys(this.cartDetails).length ; i++) {  
  this.price = Number(this.cartDetails[i].uniPrice)
  this.total = this.price * Number(this.cartDetails[i].quantity)
      this.viewTotal  += this.total
      console.log(res)
   };
      },

      err => {
        console.error(err)
      }
    )
    

  }

  itemrawclicked(){
   // this.router.navigate(['itemDetail']);
  }
  remove(num){
    var item= this.cartDetails[num]._id
    console.log(item)
    this.cartAuth.deleteItem(item)
    .subscribe(  
      (res) => {
        // this.router.navigate([''])
        console.log(res)
        this.cartDetails= res
        console.log(res)
        window.location.reload();
      },

      err => {
        console.error(err)
      }
    )
  }
  

  checkout(){
    this.showCart=false;
    this.showPayment=true;
    this.details = this.auth2.getUserDetails();
    console.log(this.details.address)

  //   this.dataRead.forEach(obj => {
  //     obj.forEach(childObj=> {
  //       this.ddataRead2ataRead2= this.dataRead;
  //    });
  // });
  // this.dataRead2.push({key:"asd"  value:"ddd"})
  
  let  dataRead2: checkout=new checkout() 
  for (let i = 0; i <  Object.keys(this.cartDetails).length ; i++) {   

 dataRead2.u_id=this.cartDetails[i].u_id,
 dataRead2.productId=this.cartDetails[i].productId,
 dataRead2.productName=this.cartDetails[i].productName,
 dataRead2.uniPrice= this.cartDetails[i].uniPrice,
 dataRead2.quantity= this.cartDetails[i].quantity,
 dataRead2.total= this.cartDetails[i].total,
 dataRead2.shopId= this.cartDetails[i].shopID,
 dataRead2.address= this.details.address,
 dataRead2.mobileNumber= this.details.conatct,
 dataRead2.customerName= this.details.full_name
    // dataRead3=dataRead2
    this.dataTest2.push(dataRead2)
    // this.addcheckout(dataRead2)
    console.log(this.dataTest2);
    console.log("cart data");
  };
  

    // this.cartAuth.removeCart(this.user)
    // .subscribe(  
    //   (res) => {
    //     // this.router.navigate([''])
    //     console.log(res)
    //     this.cartDetails= res
    //     // window.location.reload();
    //   },

    //   err => {
    //     console.error(err)
    //   }
    // )
  }

//   addcheckout(add:addcart){
// //  this.checkCartAuth.add(add)
// //  .subscribe(  
// //     (res) => {
// //       // this.router.navigate([''])
// //       console.log(res)
// //     },

// //     err => {
// //       console.error(err)
// //     }
// //   )
//   // this.router.navigate(['payment'])
//   }


}
