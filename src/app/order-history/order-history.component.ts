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

  headElements = ['ID', 'Date', 'Payment Type', 'Total Amount', 'Order Status'];

  elements: any = [
    {id: '#10015', date: '04-07-2020', paymenttype: 'cash on delivery', price: 'Rs.3200 /=', status: 'Completed'},
    {id: '#10016', date: '09-07-2020', paymenttype: 'cash on delivery', price: 'Rs.2150 /=', status: 'On Delivery'},
    {id: '#20049', date: '15-07-2020', paymenttype: 'cred card', price: 'Rs.4750 /=', status: 'Order confirmed'},
  ];

  ngOnInit(): void {
    this.user = this.auth2.getUserDetails()._id;
    this.auth.findHistory(this.user)
    .subscribe(  
      (res) => {
        // this.cartDetails= res
        // console.log(this.cartDetails[1].uniPrice)
      },

      err => {
        console.error(err)
      }
    )

  }

}
