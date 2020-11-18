import { ProductDetails } from '../../models/productDetails';
import { SellerDetailsService } from '../../services/seller-details.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService ,removeproduct} from '../../services/product.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { aProductDetails } from '../../models/aProductData';
// import{productDetailsService, addproduct} from'../../services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {

  productArray: any;
  popup_details:ProductDetails;
  productByshop: any;
  selectedProduct:aProductDetails;
  editProductShow:boolean=false;
  displayProductShow:boolean =false;
  fisrtReresh:boolean=true;

  
  constructor(private auth:productDetailsService,
    private authSeller:SellerDetailsService, private router:Router) { }

  imgLink : string = 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg';


  shopName = this.authSeller.getUserDetails().shopName;
  bid = this.authSeller.getUserDetails().businessID;
  mail = this.authSeller.getUserDetails().email;
  phone = this.authSeller.getUserDetails().officePhone;
  address = this.authSeller.getUserDetails().address;
  shopid = this.authSeller.getUserDetails()._id;

  ngOnInit(): void {
    
    // console.log("aaa"+this.authSeller.getUserDetails().shopName);

    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list;
      console.log(this.productArray);
      this.productfilter();
    });

  }

  productfilter(){
    this.productByshop = this.productArray.filter(xx => xx.shopID === this.shopid);
  }

  addnum(){

  // if(this.productrArray.category=="1"){   
  //   // this.ss ="1";
  //   // this.display_feild1=true;
  //   // this.auth.productDetailsField(this.ss).subscribe((list1)=>{
  //   //   this.productrArray_field1 = list1
  //     console.log("mm");
  //   // });

  // }
  }

  addProductsClicked(){
    this.router.navigate(['seller','addProducts']);
  }

  manageOrdersClicked(){
    this.router.navigate(['seller','manageOrders']);
  }

  editProductsClicked(value:aProductDetails){
    this.editProductShow=true;
    this.displayProductShow=true;
    this.selectedProduct=value;

  }


  deleteCardButn(frame,index){
    frame.show()
    this.popup_details=index
  // alert('Task:' +index.first_name)
  console.log(index._id)
  }

  deleteProduct(code){
    this.auth.deleteProduct(code).subscribe(
      ()=>{
       //this.router.navigate(['seller','/'])
       window.location.reload();
      }, 
      err=>{
        console.error(err)
      }
     )
     console.log(code);
  }

  onClose(event: any) {
    console.log(event);
  }

  
}
