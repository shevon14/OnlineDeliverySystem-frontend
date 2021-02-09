import { SellerDetailsService, UserDetails } from '../../services/seller-details.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{productDetailsService, addproduct} from'../../services/product.service';
import{Router} from'@angular/router';
import { last } from 'rxjs/operators';
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ServerStartPoint } from '../../services/server.service';
import { categoryDetailsService } from '../../services/category.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  private traget:string;
  // export interface addproduct {
  //   _id: string,
  //   productName: string,
  //   uniPrice: string,
  //   availableQuantity: string,
  //   category: string
    
  //   }

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;

  selectedFile: File = null;
  downloadURL: Observable<string>;
  allCategoryList:any;
  imgPath="https://www.mibdirectory.com/MIBADMIN/img/upload/nopreview.png";

  //saving data to db
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
  

  constructor(public auth:productDetailsService,
              private router:Router,
              private http: HttpClient,
              private authSeller : SellerDetailsService,
              private formBuilder: FormBuilder,
              private serverStartPoint:ServerStartPoint,
            private categoryService:categoryDetailsService) { 

 this.traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";
}

  ngOnInit(): void {

    this.getAllCategory();
    
      this.fileUploadForm = this.formBuilder.group({
        uploadedImage: ['']
      })
  } 

  onFileSelect(event) {
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.fileUploadForm.get('uploadedImage').setValue(file);

    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.imgPath=event.target.result;
      }
    }

  }

  onFormSubmit() {

    if (!this.fileUploadForm.get('uploadedImage').value) {
      alert('Please fill valid details!');
      return false;
    }

    const formData = new FormData();
    formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
    formData.append('agentId', '007');


    this.http
      .post<any>(this.traget +'uploadfile', formData).subscribe(response => {
        console.log(response);
        this.credentials.imgName = this.traget +'uploads/' + this.fileInputLabel;
        this.credentials.shopName =  this.authSeller.getUserDetails().shopName;
        this.credentials.shopID = this.authSeller.getUserDetails()._id;

        if (response.statusCode === 200) {
          this.auth.add(this.credentials).subscribe(
            ()=>{ 
              this.router.navigate(['seller'])
            },
       
            err=>{
              console.error(err)
            }
           )
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });

      // this.auth.add(this.credentials).subscribe(
      //   ()=>{ 
      //     this.router.navigate(['seller'])
      //   },
   
      //   err=>{
      //     console.error(err)
      //   }
      //  )
    }

  /*onFormSubmit(){

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
  }*/

getAllCategory(){
  this.categoryService.categoryDetails().subscribe((list)=>{
    this.allCategoryList=list;
  })
}
}

