import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../services/customer-reg.service';
import { checkCartService } from '../services/Checkcart.service';
import { CartDetails } from '../models/cartDetails';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  
  user:String;
  cartDetails:CartDetails;

  constructor(private auth:checkCartService,
    private auth2: CustomerDetailsService) { }


  elements: any = [
    
  ];

  ngOnInit(): void {
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

}
