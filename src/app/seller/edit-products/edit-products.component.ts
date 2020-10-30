import { Router } from '@angular/router';
import { productDetailsService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  constructor(public auth:productDetailsService, private router:Router) { }

  ngOnInit(): void {
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
    this.auth.add(this.imgSrc).subscribe(
       ()=>{
         this.router.navigate(['products/list/:_id/photo'])
       },
  
       err=>{
         console.error(err)
       }
      )
  }

}
