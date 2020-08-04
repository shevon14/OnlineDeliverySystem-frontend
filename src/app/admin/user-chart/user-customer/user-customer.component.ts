import { Component, OnInit } from '@angular/core';

import { CustomerPopUpModalComponent } from './customer-pop-up-modal/customer-pop-up-modal.component';
import { CustomerDetails } from './../../../models/customerDetails';
import { CustomerDetailsService } from './../../../services/customer-reg.service';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-user-customer',
  templateUrl: './user-customer.component.html',
  styleUrls: ['./user-customer.component.scss']
})
export class UserCustomerComponent implements OnInit {

  
  customerArray: CustomerDetails;
  modalRef: MDBModalRef;

  constructor(private router: Router,
    private modalService: MDBModalService,
    private customerService: CustomerDetailsService) { 
    }


  openModal(first_name: String,last_name:String,address: String,email: String) {
      this.modalRef = this.modalService.show(CustomerPopUpModalComponent, { 
              backdrop: true,
              keyboard: true,
              focus: true,
              show: false,
              ignoreBackdropClick: false,
              class:'modal-dialog modal-md',
              containerClass: 'modal fade bottom',
              role:'document',
              animated: true,
              data: {
                  heading: 'Customer Details',
                  content: { heading: 'Content heading', description: 'Content description', first_name:first_name, last_name:last_name,address:address, email:email}
              } });
            
                  this.modalRef.content.action.subscribe( (result: any) => { console.log(result) });
            
              }
          

  ngOnInit(){
    this.customerService.fetchCustomerDetails().subscribe((customer)=>{
      this.customerArray = customer
      console.log(this.customerArray);
    });
  }

// deleteseller(id2){
//   this.sellersService.deleteSeller(id2).subscribe(
//     ()=>{
//       this.router.navigate(['admin','userSellers']);
//       console.log(id2);
//     },

  //   err=>{
  //     console.error(err)
  //   }
  // )
  // }

}
