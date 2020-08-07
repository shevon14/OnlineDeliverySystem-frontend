import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService ,removeproduct} from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/productDetails';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { SellerDetailsService} from './../../services/seller-details.service';
// import{productDetailsService, addproduct} from'../../services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {

  productArray: ProductDetails;
  popup_details:ProductDetails;

  shopName : string = "ABC Stores";

  constructor(private auth:productDetailsService,
    private authSeller:SellerDetailsService, private router:Router) { }

  imgLink : string = 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg';

  cards = [
    {
      title: 'Item number 1',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 2',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 3',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 4',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 5',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    
  ];

  ngOnInit(): void {

    // console.log("aaa"+this.authSeller.getUserDetails().shopName);

    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list;
      console.log(this.productArray);
    });

    // aaaa:this.authSeller.getUserDetails().shopName;
    


    // if(this.productrArray.category=="2"){
    //   this.ss ="2";
    //   this.display_feild2=true;
    //   this.auth.productDetailsField(this.ss).subscribe((list2)=>{
    //     this.productrArray_field2 = list2
    //     console.log(this.productrArray_field2);
    //   });

    // }
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

  editProductsClicked(){
    this.router.navigate(['seller','editProducts']);
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
