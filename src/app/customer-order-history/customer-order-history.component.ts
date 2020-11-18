import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../services/customer-reg.service';
import { checkCartService } from '../services/Checkcart.service';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.scss']
})
export class CustomerOrderHistoryComponent implements OnInit {

  user:string;
  getFullArray:any
  getSelectedArray:any

  constructor(private auth2: CustomerDetailsService,
    private checkCartAuth:checkCartService) { }

  ngOnInit(): void {

    this.user = this.auth2.getUserDetails()._id;
    console.log(this.user)
    this.checkCartAuth.getall()
    .subscribe(  
      (res) => {
this.getFullArray=res
        this.getSelectedArray = this.getFullArray.filter(xx => xx.u_id === this.user);
        console.log(this.getSelectedArray)

  //       console.log(Object.keys(this.cartDetails).length)
  //   for (let i = 0; i <  Object.keys(this.cartDetails).length ; i++) {  
  // this.price = Number(this.cartDetails[i].uniPrice)
  // this.total = this.price * Number(this.cartDetails[i].quantity)
  //     this.viewTotal  += this.total
  //     console.log(this.viewTotal)
  //  };
        // console.log(this.cartDetails[1].uniPrice)
      },

      err => {
        console.error(err)
      }
    )
  }
  openDetails(){

  }

}
