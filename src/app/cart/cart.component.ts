import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { cartDetailsService } from '../services/cart.service';
import { CustomerDetailsService, UserDetails } from '../services/customer-reg.service';
import { productDetailsService } from '../services/product.service';
import { CartDetails } from '../models/cartDetails';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  details:UserDetails
  cartDetails:CartDetails
  total:Number;
  viewTotal:Number;
  // viewQuantity={
  //   itemQuantity:String
  // };


  constructor(private router: Router,
              private cartAuth:cartDetailsService,
              private auth2: CustomerDetailsService,
              private productAuth :productDetailsService) { }

  // elements: any = [
  //   {id: 1, name: 'rolex watch', quantity: '1', price: 'Rs.3000'},
  //   {id: 2, name: 'head set', quantity: '2', price: 'Rs.1920'},
  //   {id: 3, name: 'mobile charger', quantity: '1', price: 'Rs.600'},
  // ];

  headElements = ['ID', 'Name', 'Qtn.', 'Price', '' ,'Remove'];

  ngOnInit(): void {
    // this.details._id = this.auth2.getUserDetails()._id;
    console.log("cart page")
    this.cartAuth.cartDetails("5f95943516c93926648ce267")
    .subscribe(  
      (res) => {
        // this.router.navigate([''])
        
        this.cartDetails= res
        // this.total = Number(this.cartDetails.uniPrice)
        console.log(Object.keys(this.cartDetails))
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
    this.cartAuth.removeCart(item)
    .subscribe(  
      (res) => {
        // this.router.navigate([''])
        console.log(res)
        this.cartDetails= res
      },

      err => {
        console.error(err)
      }
    )
  }

  // increase(){
  //   this.viewQuantity.itemQuantity
  // }
}
