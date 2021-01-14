import { aProductDetails } from '../models/aProductData';
import { ProductDetails } from '../models/productDetails';
import { Router } from '@angular/router';
import { SellerDetailsService } from '../services/seller-details.service';
import { productDetailsService } from '../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserDetails, CustomerDetailsService } from '../services/customer-reg.service';
import { addcart, cartDetailsService } from '../services/cart.service';

@Component({
  selector: 'app-product-by-shop',
  templateUrl: './product-by-shop.component.html',
  styleUrls: ['./product-by-shop.component.scss']
})
export class ProductByShopComponent implements OnInit {

  shopName : any;
  _property: aProductDetails;
  shopid : any;
  num: number;
  details:UserDetails;

  productArray: any;
  productByshop: any;

  constructor(private auth:productDetailsService,
              private authSeller:SellerDetailsService, 
              private router:Router,private auth2:CustomerDetailsService,
              private auth3:cartDetailsService) { }

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
  addcartClicked(item:any) {
    console.log(item)
    this.details = this.auth2.getUserDetails();
    console.log(this.details._id)

    this.num=Number(item.uniPrice) +150

    const addCart = <addcart>{
      u_id: this.details._id,
      productId: item._id,
      productName:item.productName,
      uniPrice: item.uniPrice,
      quantity:"1",
      total:this.num.toString(),
      shopID:item.shopID

    }

  if(item.availableQuantity!="0"){
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
    alert("The Selected Product is OUT OF STOCK")
  }

    // this.router.navigate(['itemDetail']);

    // this.auth2.login(this.credentials).subscribe(
    //   (res)=>{
    //    // this.router.navigateByUrl('/'+this.auth.getUserDetails().user_type)
    //     this.router.navigate([''])
    //    console.log(this.credentials)
    //    console.log(res)
    //   },

    //   err=>{
    //     console.error(err)
    //   }
    //  )
  }
  viewShoppingCart(){
    this.router.navigate(['cart']);
  }
  continueShopping(){
    this.router.navigate(['products']);
  }

}
