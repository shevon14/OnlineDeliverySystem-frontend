import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService} from '../services/product.service';
import { ProductDetails } from '../models/productDetails';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productArray: any;
  // ProductDetails;

  constructor(private auth:productDetailsService,
     private router:Router
    ) { }

    electronicDeviceArray : any; electrocAccessoriesArray: any; womansFashionArray :any; mensFashionarray: any;
    watchesArray :any; healthArray:any; homeKitchenArray:any; sportsarray: any;


  ngOnInit(): void {
    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list
      console.log(this.productArray);
      this.productsfilter();
    });
  }

  productsfilter(){
     this.electronicDeviceArray = this.productArray.filter(xx => xx.category === '1');
     this.electrocAccessoriesArray = this.productArray.filter(xx => xx.category === '2');
     this.womansFashionArray = this.productArray.filter(xx => xx.category === '3');
     this.mensFashionarray = this.productArray.filter(xx => xx.category === '4');
     this.watchesArray = this.productArray.filter(xx => xx.category === '5');
     this.healthArray = this.productArray.filter(xx => xx.category === '6');
     this.homeKitchenArray = this.productArray.filter(xx => xx.category === '7');
     this.sportsarray = this.productArray.filter(xx => xx.category === '8');
   }

  itemDetailsClicked(){
    this.router.navigate(['itemDetail']);
  }

  shopViewClicked(){
    this.router.navigate(['productsByShop']);
  }


}
