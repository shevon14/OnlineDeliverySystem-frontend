import { aProductDetails } from './../models/aProductData';
import { ProductDetails } from 'src/app/models/productDetails';
import { Router } from '@angular/router';
import { SellerDetailsService } from 'src/app/services/seller-details.service';
import { productDetailsService } from 'src/app/services/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-by-shop',
  templateUrl: './product-by-shop.component.html',
  styleUrls: ['./product-by-shop.component.scss']
})
export class ProductByShopComponent implements OnInit {

  shopName : any;
  _property: aProductDetails;
  shopid : any;

  productArray: any;
  productByshop: any;

  constructor(private auth:productDetailsService,
              private authSeller:SellerDetailsService, 
              private router:Router) { }

  @Input() set property1 (value:aProductDetails){
    this._property = value;
    console.log(this._property)
  }            


  ngOnInit(): void {

    this.shopid = this._property.shopID;
    this.shopName = this._property.shopName;
    console.log(this.shopid);

    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list;
      console.log(this.productArray);
      this.productfilter();
    });

  }

  productfilter(){
    this.productByshop = this.productArray.filter(xx => xx.shopID === this.shopid);
  }

  itemDetailsClicked(){
    this.router.navigate(['itemDetail']);
  }

}
