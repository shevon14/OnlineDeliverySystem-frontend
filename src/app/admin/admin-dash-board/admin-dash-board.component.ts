import { productDetailsService } from '../../services/product.service';
import { SellerDetailsService } from '../../services/seller-details.service';
import { NavBarService } from '../../services/nav-bar.service';
import { AuthenticationService } from '../../authentication.service';
import { SellerDetails } from '../../models/sellerDetails.models';
import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from '../../services/customer-reg.service';
import { categoryDetailsService, categoryData } from '../../services/category.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent implements OnInit {

  productrArray: any;
  customersArray: any;
  sellerArray : any;
  categoryData:any;

  categorylist:categoryData={
    _id: '',
    category_name: '',
        category_id: '',
   }

  constructor(private auth:AuthenticationService,
     private navbarService:NavBarService,
     private sellers: SellerDetailsService,
     private customers: CustomerDetailsService,
     private products:productDetailsService,
     private categoryService:categoryDetailsService) {
     this.navbarService.hide();
   }

  ngOnInit(): void {

    this.products.productDetails().subscribe((list)=>{
      this.productrArray = list
      console.log(this.productrArray);
    });
    this.customers.fetchCustomerDetails().subscribe((list)=>{
      this.customersArray = list
      console.log(this.customersArray);
    });

    this.sellers.fetchSellerDetails().subscribe((list)=>{
      this.sellerArray = list
      console.log(this.sellerArray);
    });

    this.categoryService.categoryDetails().subscribe((list)=>{
      this.categoryData=list
    });
  }

  ngOnDestroy(){
   // this.navbarService.show();
  }
  deleteData(code){
    this.categoryService.deleteCategory(code).subscribe((list)=>{
      // this.categoryData=list
      window.location.reload();
    }, 
    err=>{
      console.error(err)
    });
  }

  addData(){
  this.categoryService.add(this.categorylist).subscribe(
    ()=>{ 
      window.location.reload();
    },

    err=>{
      console.error(err)
    }
   )
  }
}
