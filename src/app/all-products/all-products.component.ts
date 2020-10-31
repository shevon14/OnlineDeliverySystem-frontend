import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { productDetailsService} from '../services/product.service';
import { CustomerDetailsService,UserDetails} from '../services/customer-reg.service';
import { ProductDetails } from '../models/productDetails';
import { aProductDetails } from '../models/aProductData';
import { cartDetailsService,addcart} from '../services/cart.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { CartDetails } from '../models/cartDetails';
import { ItemDetailsForCartComponent } from '../item-details-for-cart/item-details-for-cart.component';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productArray: any;
  showdetails:false;
  selectedProduct:aProductDetails;
  states=false;
  // ProductDetails;
   details:UserDetails
   modalRef: MDBModalRef;

  constructor(private auth:productDetailsService,private auth2:CustomerDetailsService,private auth3:cartDetailsService,
     private modalService: MDBModalService,private router:Router
    ) { }

    electronicDeviceArray : any; electrocAccessoriesArray: any; womansFashionArray :any; mensFashionarray: any;
    watchesArray :any; healthArray:any; homeKitchenArray:any; sportsarray: any;



  ngOnInit(): void {
    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list
      console.log(this.productArray);
      this.productsfilter();
    });
   
  }

  productsfilter(){
     this.electronicDeviceArray = this.productArray.filter(xx => xx.category === '1');
     this.electrocAccessoriesArray = this.productArray.filter(xx => xx.category === '2');
     this.womansFashionArray = this.productArray.filter(xx => xx.category === '3');
     this.mensFashionarray = this.productArray.filter(xx => xx.category === '4');
     this.watchesArray = this.productArray.filter(xx => xx.category === '5');
     this.healthArray = this.productArray.filter(xx => xx.category === '6');
     this.homeKitchenArray = this.productArray.filter(xx => xx.category === '7');
     this.sportsarray = this.productArray.filter(xx => xx.category === '8');
    //  console.log(this.electronicDeviceArray[0]);
   }

  itemDetailsClicked(property:aProductDetails){
    // this.router.navigate(['itemDetail']);
    this.selectedProduct=property;
    this.states=true;

  }

  shopViewClicked(){
    this.router.navigate(['productsByShop']);
  }
  
  addcartClicked(aa){
    console.log(aa)
      this.details=this.auth2.getUserDetails();
      console.log(this.details._id)

      const addCart= <addcart> {
        u_id:this.details._id,
        productId:aa,
      }
	  this.auth3.add(addCart).subscribe(
        (res)=>{
          // this.router.navigate([''])
         console.log(addCart)
         console.log(res)
        },
   
        err=>{
          console.error(err)
        }
       )
      

    // this.router.navigate(['itemDetail']);


    // this.auth2.login(this.credentials).subscribe(
    //   (res)=>{
    //    // this.router.navigateByUrl('/'+this.auth.getUserDetails().user_type)
    //     this.router.navigate([''])
    //    console.log(this.credentials)
    //    console.log(res)
    //   },
 
    //   err=>{
    //     console.error(err)
    //   }
    //  )

  }

  // openModal(shopName, name, businessModel, businessID, address, personalPhone, officePhone, email) {
  //   this.modalRef = this.modalService.show(ItemDetailsForCartComponent, { 
  //           backdrop: true,
  //           keyboard: true,
  //           focus: true,
  //           show: false,
  //           ignoreBackdropClick: false,
  //           class:'modal-dialog modal-md',
  //           containerClass: 'modal fade bottom',
  //           role:'document',
  //           animated: true,
  //           data: {
  //               heading: 'Seller Details',
  //               content: { heading: 'Content heading', description: 'Content description', shopName:shopName, name:name, businessModel:businessModel, businessID:businessID, address:address, personalPhone:personalPhone, officePhone:officePhone, email:email}
  //           } });
          
  //               this.modalRef.content.action.subscribe( (result: any) => { console.log(result) });
          
  //           }


}
