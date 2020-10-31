import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService } from '../services/product.service';
import { CustomerDetailsService, UserDetails } from '../services/customer-reg.service';
import { ProductDetails } from '../models/productDetails';
import { cartDetailsService, addcart } from '../services/cart.service';
import { CartDetails } from '../models/cartDetails';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productArray: any;
  // ProductDetails;
  details: UserDetails

  constructor(private auth: productDetailsService, private auth2: CustomerDetailsService, private auth3: cartDetailsService,
    private router: Router
  ) { }

  electronicDeviceArray: any; electrocAccessoriesArray: any; womansFashionArray: any; mensFashionarray: any;
  watchesArray: any; healthArray: any; homeKitchenArray: any; sportsarray: any;


  ngOnInit(): void {
    this.auth.productDetails().subscribe((list) => {
      this.productArray = list
      console.log(this.productArray);
      this.productsfilter();
    });
  }

  productsfilter() {
    this.electronicDeviceArray = this.productArray.filter(xx => xx.category === '1');
    this.electrocAccessoriesArray = this.productArray.filter(xx => xx.category === '2');
    this.womansFashionArray = this.productArray.filter(xx => xx.category === '3');
    this.mensFashionarray = this.productArray.filter(xx => xx.category === '4');
    this.watchesArray = this.productArray.filter(xx => xx.category === '5');
    this.healthArray = this.productArray.filter(xx => xx.category === '6');
    this.homeKitchenArray = this.productArray.filter(xx => xx.category === '7');
    this.sportsarray = this.productArray.filter(xx => xx.category === '8');
  }

  itemDetailsClicked() {
    this.router.navigate(['itemDetail']);
  }

  shopViewClicked() {
    this.router.navigate(['productsByShop']);
  }

  addcartClicked(aa) {
    console.log(aa)
    this.details = this.auth2.getUserDetails();
    console.log(this.details._id)

    const addCart = <addcart>{
      u_id: this.details._id,
      productId: aa,
    }
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


}
