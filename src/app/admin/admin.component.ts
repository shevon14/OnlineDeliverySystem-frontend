import { SellerDetails } from '../models/sellerDetails.models';
import { SellerDetailsService } from '../services/seller-details.service';
import { ProductDetails } from '../models/productDetails';
import { productDetailsService } from '../services/product.service';
import { NavBarService } from '../services/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import{AuthenticationService, TokenPayload} from'../authentication.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
 // styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor(private auth:AuthenticationService,
     private navbarService:NavBarService,) {
     this.navbarService.hide();
   }

  ngOnInit(): void {}

  ngOnDestroy(){
    this.navbarService.hide();
  }

}
