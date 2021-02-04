import { Component, OnInit, Input } from '@angular/core';
import { aProductDetails } from '../models/aProductData';
// import { FormGroup } from '../../../node_modules/@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UserDetails, CustomerDetailsService } from '../services/customer-reg.service';
import { cartDetailsService, addcart } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-details-for-cart',
  templateUrl: './item-details-for-cart.component.html',
  styleUrls: ['./item-details-for-cart.component.scss']
})
export class ItemDetailsForCartComponent implements OnInit {
  _property:aProductDetails
  date: Date;
  price:number;
  viewPrice:number;
  totalPrice:number;
  details:UserDetails
  // itemQuantity:String;

  constructor(private auth2:CustomerDetailsService,private auth3:cartDetailsService
    ,private router:Router) { }
  // validatingForm : FormGroup;
  validatingForm=({
    itemQuantity: String('1')});

  @Input() set property (value:aProductDetails){
    this._property = value;
    console.log(this._property)

    this.date = new Date();
    this.date.setDate( this.date.getDate() + 7);
  }

 
  ngOnInit(): void {
    this.price = Number(this._property.uniPrice)
    this.viewPrice = Number(this._property.uniPrice)
    this.totalCalculation();
    
  }


  increase(){
    console.log(this.validatingForm.itemQuantity)
    this.viewPrice  = this.price * Number(this.validatingForm.itemQuantity)
    this.totalCalculation();

  }
  totalCalculation(){
    this.totalPrice = this.viewPrice + 150
  }
  CartClicked() {
    // console.log(item)
    this.details = this.auth2.getUserDetails();
    console.log(this.details._id)

    const addCart = <addcart>{
      u_id: this.details._id,
      productId: this._property._id,
      productName:this._property.productName,
      uniPrice: this._property.uniPrice,
      quantity:this.validatingForm.itemQuantity,
      total:this.totalPrice.toString(),
      shopID:this._property.shopID
    }
    if(this._property.availableQuantity!="0"){
    this.auth3.add(addCart).subscribe(  
      (res) => {
        // this.router.navigate([''])
        console.log(addCart)
        console.log(res)
      },

      err => {
        console.error(err)
      }
    )
  }

  else{
    alert("YOU can't add the product because not available contity")
  }
  
  }

  viewShoppingCart(){
    this.router.navigate(['cart']);
  }
  continueShopping(){
    this.router.navigate(['products']);
  }
}
