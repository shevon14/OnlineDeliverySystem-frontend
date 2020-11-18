import { CustomerDetailsService } from '../services/customer-reg.service';
import { UserDetails } from '../services/seller-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {


  constructor(private auth2: CustomerDetailsService) { }

  ngOnInit(): void {
    
  }

  details = this.auth2.getUserDetails();
  name = this.auth2.getUserDetails().full_name;
  email = this.auth2.getUserDetails().email;
  address = this.auth2.getUserDetails().address;
  contact = this.auth2.getUserDetails().conatct;
  

}
