import { SellerPopUpModalComponent } from './seller-pop-up-modal/seller-pop-up-modal.component';
import { SellerDetails } from '../../../models/sellerDetails.models';
import { SellerDetailsService } from '../../../services/seller-details.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-user-seller',
  templateUrl: './user-seller.component.html',
  styleUrls: ['./user-seller.component.scss']
})
export class UserSellerComponent implements OnInit {

  sellerArray: SellerDetails;
  modalRef: MDBModalRef;

  constructor(private router: Router,
              private modalService: MDBModalService,
              private sellersService: SellerDetailsService) { 
              }

  openModal(shopName, name, businessModel, businessID, address, personalPhone, officePhone, email) {
      this.modalRef = this.modalService.show(SellerPopUpModalComponent, { 
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
                  heading: 'Seller Details',
                  content: { heading: 'Content heading', description: 'Content description', shopName:shopName, name:name, businessModel:businessModel, businessID:businessID, address:address, personalPhone:personalPhone, officePhone:officePhone, email:email}
              } });
            
                  this.modalRef.content.action.subscribe( (result: any) => { console.log(result) });
            
              }
          

  ngOnInit(){
    this.sellersService.fetchSellerDetails().subscribe((seller)=>{
      this.sellerArray = seller
      console.log(this.sellerArray);
    });
  }

deleteseller(id2){
  this.sellersService.deleteSeller(id2).subscribe(
    ()=>{
      window.location.reload();
      console.log(id2);
    },

    err=>{
      console.error(err)
    }
  )
  }

}
