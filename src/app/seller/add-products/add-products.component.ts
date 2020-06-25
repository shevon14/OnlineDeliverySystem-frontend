import { Component, OnInit } from '@angular/core';
import{productDetailsService, addproduct} from'../../services/product.service';
import{Router} from'@angular/router';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  // export interface addproduct {
  //   _id: string,
  //   productName: string,
  //   uniPrice: string,
  //   availableQuantity: string,
  //   category: string
    
  //   }

  credentials:addproduct={
   _id: '',
    productName: '',
    uniPrice: '',
    availableQuantity: '',
    category: '',
  }


  constructor(public auth:productDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  onImgUploadClick(event) { 
 
  }

  
  addtoDB(){

   this.auth.add(this.credentials).subscribe(
      ()=>{
        this.router.navigate(['seller'])
      },
 
      err=>{
        console.error(err)
      }
     )




    // this.auth.add(this.credentials).subscribe(
    //   ()=>{
    //    this.router.navigate(['/'])
    //   },
 
    //   err=>{
    //     console.error(err)
    //   }
    //  )
  }


}
