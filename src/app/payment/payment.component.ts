import { CustomerDetailsService } from './../services/customer-reg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private auth2 : CustomerDetailsService){ }

  ngOnInit(): void {
    
  }

  details = this.auth2.getUserDetails();
  name = this.auth2.getUserDetails().full_name;
  email = this.auth2.getUserDetails().email;
  address = this.auth2.getUserDetails().address;
  contact = this.auth2.getUserDetails().conatct;
  price = "Rs.1500/=";
  
}
