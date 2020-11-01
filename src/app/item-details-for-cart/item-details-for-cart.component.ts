import { Component, OnInit, Input } from '@angular/core';
import { aProductDetails } from '../models/aProductData';
// import { FormGroup } from '../../../node_modules/@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  // itemQuantity:String;

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

  
  CartClicked(){
    
  }

  increase(){
    console.log(this.validatingForm.itemQuantity)
    this.viewPrice  = this.price * Number(this.validatingForm.itemQuantity)
    this.totalCalculation();

  }
  totalCalculation(){
    this.totalPrice = this.viewPrice + 150
  }
}
