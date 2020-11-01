import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/productDetails';

@Component({
  selector: 'app-item-card-slider',
  templateUrl: './item-card-slider.component.html',
  styleUrls: ['./item-card-slider.component.scss']
})
export class ItemCardSliderComponent implements OnInit {

  constructor(private auth:productDetailsService,private router:Router) { }

  productrArray: ProductDetails;

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

}
  

