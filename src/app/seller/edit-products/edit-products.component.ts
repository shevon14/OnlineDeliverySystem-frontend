import { Router } from '@angular/router';
import { productDetailsService, addproduct } from 'src/app/services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { aProductDetails } from '../../models/aProductData';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  constructor(public auth:productDetailsService, private router:Router) { }
  product:aProductDetails;
  selectProducr:any;
  as:number;

  @Input() set data (value:aProductDetails){
    this.product = value;
    console.log(this.product)
  }

  credentials:addproduct={
    _id: '',
     productName: '',
     uniPrice: '',
     availableQuantity: '',
     category: '',
     imgName: '',
     shopID : '',
     shopName : ''
   }
  // @Input() set position (value:any){
  //   this.as = value;
  //   this.selectProducr=this.product[this.as]
  //   console.log(this.selectProducr)

  // }
  ngOnInit(): void {
    // this.credentials._id=this.product._id;
    this.credentials.productName=this.product.productName;
    this.credentials.uniPrice=this.product.uniPrice;
    this.credentials.availableQuantity=this.product.availableQuantity;
    this.credentials.category=this.product.category;
    this.credentials.imgName=this.product.imgName;
    this.credentials.shopID=this.product.shopID;
    this.credentials.shopName=this.product.shopName;
  }

  imgSrc; 

  onImgUploadClick(event) { 
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgSrc = event.target.result;
       // console.log(this.imgSrc);
      }
    }
  }

  addtoDB(){

    this.auth.productUpdatedData(this.product._id,this.credentials).subscribe(
      ()=>{ 
        console.log(this.credentials)
        //this.router.navigate(['seller'])
      },
 
      err=>{
        console.error(err)
      }
    )
    // this.auth.add(this.imgSrc).subscribe(
    //    ()=>{
    //      this.router.navigate(['products/list/:_id/photo'])
    //    },
  
    //    err=>{
    //      console.error(err)
    //    }
    //   )
  }

}
