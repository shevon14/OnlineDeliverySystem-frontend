import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  constructor() { }

  headElements = ['ID', 'Date', 'Payment Type', 'Total Amount', 'Order Status'];

  elements: any = [
    {id: '#10015', date: '04-07-2020', paymenttype: 'cash on delivery', price: 'Rs.3200 /=', status: 'Completed'},
    {id: '#10016', date: '09-07-2020', paymenttype: 'cash on delivery', price: 'Rs.2150 /=', status: 'On Delivery'},
    {id: '#20049', date: '15-07-2020', paymenttype: 'cred card', price: 'Rs.4750 /=', status: 'Order confirmed'},
  ];

  ngOnInit(): void {
  }

}
