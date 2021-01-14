import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../services/customer-reg.service';
import { checkCartService } from '../services/Checkcart.service';
import { CartDetails } from '../models/cartDetails';
import { SellerDetailsService } from '../services/seller-details.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  
  user:String;
  cartDetails:CartDetails;
  getFullArray:any
  getSelectedArray:any
  showDetails:boolean=false;
  hideTable:boolean=true;
  getShowArray:any;
  getShopDetails:any;

  constructor(private auth:checkCartService,
    private auth2: CustomerDetailsService, private checkCartAuth:checkCartService,
    private authSeller: SellerDetailsService) { }
   
  

  elements: any = [
    
  ];

  ngOnInit(): void {
    
    this.user = this.auth2.getUserDetails()._id;
    console.log(this.user)
    this.checkCartAuth.getall()
    .subscribe(  
      (res) => {
        this.getFullArray=res
        this.getSelectedArray = this.getFullArray.filter(xx => xx.u_id === this.user);
        console.log(this.getSelectedArray);

      },

      err => {
        console.error(err)
      }
    )
    // this.user = this.auth2.getUserDetails()._id;
    // this.auth.findHistory(this.user)
    // .subscribe(  
    //   (res) => {
    //     // this.cartDetails= res
    //     // console.log(this.cartDetails[1].uniPrice)
    //   },

    //   err => {
    //     console.error(err)
    //   }
    // )

  }

  inClicked(customerdata:any){
this.showDetails=true;
this.hideTable=false;
this.getShowArray=customerdata;

    this.authSeller.getShopData(this.getShowArray.shopID)
    .subscribe(  
      (res) => {
        this.getShopDetails=res;

      },

      err => {
        console.error(err)
      }
    )

  }

}
