import { Component, OnInit } from '@angular/core';

import { CustomerDetails } from '../../../../models/customerDetails';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CustomerDetailsService } from '../../../../services/customer-reg.service';

@Component({
  selector: 'app-customer-pop-up-modal',
  templateUrl: './customer-pop-up-modal.component.html',
  styleUrls: ['./customer-pop-up-modal.component.scss']
})
export class CustomerPopUpModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,
    private customerService:CustomerDetailsService) { }

content: any;
customerArray: CustomerDetails;

ngOnInit(): void {
  this.customerService.fetchCustomerDetails().subscribe((customer)=>{
    this.customerArray = customer
    console.log(this.customerArray);
})
}

onClose(event: any) {
console.log(event);
}

}
