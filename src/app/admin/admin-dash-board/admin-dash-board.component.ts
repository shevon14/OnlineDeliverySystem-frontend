import { productDetailsService } from './../../services/product.service';
import { SellerDetailsService } from './../../services/seller-details.service';
import { NavBarService } from './../../services/nav-bar.service';
import { AuthenticationService } from './../../authentication.service';
import { SellerDetails } from './../../models/sellerDetails.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent implements OnInit {

  productrArray: any;
  sellerArray : SellerDetails;

  constructor(private auth:AuthenticationService,
     private navbarService:NavBarService,
     private sellers: SellerDetailsService,
     private products:productDetailsService) {
     this.navbarService.hide();
   }

  ngOnInit(): void {

    this.products.productDetails().subscribe((list)=>{
      this.productrArray = list
      console.log(this.productrArray);
    });

  }

  ngOnDestroy(){
    this.navbarService.show();
  }
}
