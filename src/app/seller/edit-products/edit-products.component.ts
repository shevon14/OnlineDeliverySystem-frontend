import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  onImgUploadClick(event) { 
 
  }

  addtoDB(){
    // this.auth.add(this.credentials).subscribe(
    //    ()=>{
    //      this.router.navigate(['seller'])
    //    },
  
    //    err=>{
    //      console.error(err)
    //    }
    //   )
    }

}
