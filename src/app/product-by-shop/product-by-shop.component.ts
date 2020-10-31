import { ProductDetails } from 'src/app/models/productDetails';
import { Router } from '@angular/router';
import { SellerDetailsService } from 'src/app/services/seller-details.service';
import { productDetailsService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-by-shop',
  templateUrl: './product-by-shop.component.html',
  styleUrls: ['./product-by-shop.component.scss']
})
export class ProductByShopComponent implements OnInit {

  shopName : string = "ABC Stores";
  productArray: ProductDetails;

  constructor(private auth:productDetailsService,
              private authSeller:SellerDetailsService, 
              private router:Router) { }

  ngOnInit(): void {
    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list;
      console.log(this.productArray);
    });
  }

  itemDetailsClicked(){
    this.router.navigate(['itemDetail']);
  }

}
