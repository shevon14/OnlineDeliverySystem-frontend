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
import { $ } from 'protractor';
import { NumberFormatStyle } from '@angular/common';
import { categoryDetailsService } from '../services/category.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productArray: any;
  showdetails:false;
  selectedProduct:aProductDetails;
  num: number;
  // item:CartDetails;
  states=true;
  imgview = false;
  shopview = false;
  // ProductDetails;
   details:UserDetails
   modalRef: MDBModalRef;

   displayQuantity:any;
   allCategoryList:any;
   electronicDeviceArray1:any;

  //  category_name: '',
  //  category_id: '',

  constructor(private auth:productDetailsService,private auth2:CustomerDetailsService,private auth3:cartDetailsService,
     private modalService: MDBModalService,private router:Router,private categoryService:categoryDetailsService
    ) { }

  electronicDeviceArray: any; electrocAccessoriesArray: any; womansFashionArray: any; mensFashionarray: any;
  watchesArray: any; healthArray: any; homeKitchenArray: any; sportsarray: any;



  ngOnInit(): void {
    this.getAllCategory();
    this.auth.productDetails().subscribe((list) => {
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
    this.states = false;
    this.shopview = false;
    this.imgview = true;
  
  }

  shopViewClicked(property1:aProductDetails){
    this.selectedProduct=property1;
    this.imgview = false;
    this.states = false;
    this.shopview = true;
  }

 
  addcartClicked(item:any) {
    console.log(item)
    this.details = this.auth2.getUserDetails();
    console.log(this.details._id)

    this.num=Number(item.uniPrice) +150

    const addCart = <addcart>{
      u_id: this.details._id,
      productId: item._id,
      productName:item.productName,
      uniPrice: item.uniPrice,
      quantity:"1",
      total:this.num.toString(),
      shopID:item.shopID

    }

  if(item.availableQuantity!="0"){
    this.auth3.add(addCart).subscribe(  
      (res) => {
        // this.router.navigate([''])
        console.log(addCart)
        console.log(res)
      },

      err => {
        console.error(err)
      }
    )
  }
  else{
    alert("The Selected Product is OUT OF STOCK")
  }

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

  cat1Click(){
    let x = document.querySelector("#cat1");
    if(x){
      x.scrollIntoView();
    }
  }

  cat2Click(){
    let x = document.querySelector("#cat2");
    if(x){
      x.scrollIntoView();
    }
  }

  cat3Click(){
    let x = document.querySelector("#cat3");
    if(x){
      x.scrollIntoView();
    }
  }

  cat4Click(){
    let x = document.querySelector("#cat4");
    if(x){
      x.scrollIntoView();
    }
  }

  cat5Click(){
    let x = document.querySelector("#cat5");
    if(x){
      x.scrollIntoView();
    }
  }

  cat6Click(){
    let x = document.querySelector("#cat6");
    if(x){
      x.scrollIntoView();
    }
  }

  cat7Click(){
    let x = document.querySelector("#cat7");
    if(x){
      x.scrollIntoView();
    }
  }

  cat8Click(){
    let x = document.querySelector("#cat8");
    if(x){
      x.scrollIntoView();
    }
  }
  
  viewShoppingCart(){
    this.router.navigate(['cart']);
  }
  continueShopping(){
    this.router.navigate(['products']);
  }


  filterItem123(data){
    this.electronicDeviceArray1= this.productArray.filter(xx => xx.category === data);
    console.log("lll")
  }

  getAllCategory(){
    this.categoryService.categoryDetails().subscribe((list)=>{
      this.allCategoryList=list;
    },
  
    err=>{
      console.error(err)
    })
  }

  categoryCatClick(data){
    let x = document.querySelector("#cat"+data);
    if(x){
      x.scrollIntoView();
    }
  }
}
