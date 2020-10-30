import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{productDetailsService, addproduct} from'../../services/product.service';
import{Router} from'@angular/router';
import { last } from 'rxjs/operators';
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

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

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;

  selectedFile: File = null;
  downloadURL: Observable<string>;

  //saving data to db
  credentials:addproduct={
   _id: '',
    productName: '',
    uniPrice: '',
    availableQuantity: '',
    category: '',
    imgName: ''
  }
  

  constructor(public auth:productDetailsService,
              private router:Router,
              private http: HttpClient,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.fileUploadForm = this.formBuilder.group({
        uploadedImage: ['']
      })
  } 

  onFileSelect(event) {
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.fileUploadForm.get('uploadedImage').setValue(file);
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
      .post<any>('http://localhost:3000/uploadfile', formData).subscribe(response => {
        console.log(response);
        this.credentials.imgName = 'http://localhost:3000/uploads/' + this.fileInputLabel;

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


}

