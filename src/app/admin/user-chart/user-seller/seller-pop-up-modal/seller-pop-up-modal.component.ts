import { SellerDetails } from '../../../../models/sellerDetails.models';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { SellerDetailsService } from '../../../../services/seller-details.service';

@Component({
  selector: 'app-seller-pop-up-modal',
  templateUrl: './seller-pop-up-modal.component.html',
  styleUrls: ['./seller-pop-up-modal.component.scss']
})
export class SellerPopUpModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,
              private sellerService:SellerDetailsService,) { }

  content: any;
  sellerArray: SellerDetails;

  ngOnInit(): void {
    this.sellerService.fetchSellerDetails().subscribe((sellers)=>{
      this.sellerArray = sellers;
    })
  }

  onClose(event: any) {
    console.log(event);
  }

}
