import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService } from '../../services/product.service';
import { ProductDetails } from '../../models/productDetails';
import { UserDetails, CustomerDetailsService } from '../../services/customer-reg.service';
import { addcart, cartDetailsService } from '../../services/cart.service';

@Component({
  selector: 'app-item-card-slider',
  templateUrl: './item-card-slider.component.html',
  styleUrls: ['./item-card-slider.component.scss']
})
export class ItemCardSliderComponent implements OnInit {

  constructor(private auth:productDetailsService,private router:Router,private auth2:CustomerDetailsService
  ,private auth3:cartDetailsService) { }

  productrArray: ProductDetails;
  details:UserDetails
  num: number;

  //imgLink : string = 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg';

  
  slides: any = [[]];

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.auth.productDetails().subscribe((list)=>{
      this.productrArray = list
      console.log(this.productrArray);
      this.slides = this.chunk(this.productrArray, 6);
    });
    
    //this.slides = this.chunk(this.productrArray, 6);
  }

  seeAllProducts(){
    this.router.navigate(['products']);
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
      shopID:item.shopID,

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

  }
  viewShoppingCart(){
    this.router.navigate(['cart']);
  }
  continueShopping(){
    this.router.navigate(['products']);
  }
}
  

