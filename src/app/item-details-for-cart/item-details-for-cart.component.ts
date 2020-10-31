import { Component, OnInit, Input } from '@angular/core';
import { aProductDetails } from '../models/aProductData';

@Component({
  selector: 'app-item-details-for-cart',
  templateUrl: './item-details-for-cart.component.html',
  styleUrls: ['./item-details-for-cart.component.scss']
})
export class ItemDetailsForCartComponent implements OnInit {
  _property:aProductDetails

  constructor() { }

  @Input() set property (value:aProductDetails){
    this._property = value;
    console.log(this._property)
  }

 
  ngOnInit(): void {
    
  }

  
  CartClicked(){
    
  }

}
