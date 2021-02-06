import { Router } from '@angular/router';
import { productDetailsService, addproduct } from '../../services/product.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { aProductDetails } from '../../models/aProductData';
import { categoryDetailsService } from '../../services/category.service';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServerStartPoint } from '../../services/server.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  fileUploadForm: FormGroup;
  fileInputLabel: string;
product:aProductDetails;
selectProducr:any;
allCategoryList:any;
as:number;

  constructor(public auth:productDetailsService, private router:Router,
    private categoryService:categoryDetailsService, private http: HttpClient,
    private serverStartPoint:ServerStartPoint,
    private formBuilder: FormBuilder,) { 
      this.traget = this.serverStartPoint.getStartPoint();
    }



  private traget:string;

  @Input() set data (value:aProductDetails){
    this.product = value;
    console.log(this.product)
  }
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;

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
    this.getAllCategory();

    this.fileUploadForm = this.formBuilder.group({
      uploadedImage: ['']
    })
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
      (data:any)=>{ 
        if(data.statusCode==200){
          window.location.reload();
          console.log(data);
        }
        
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
    // this.router.navigate(['seller'])
    // window.location.reload();
  }

  getAllCategory(){
    this.categoryService.categoryDetails().subscribe((list)=>{
      this.allCategoryList=list;
    },
  
    err=>{
      console.error(err)
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
        this.product.imgName=event.target.result;
      }
    }
  }


   aaa(){

  
    if (!this.fileUploadForm.get('uploadedImage').value) {
      // alert('Please fill valid details!');
      // var aa=this.credentials.imgName
      // this.credentials.imgName=this.product.imgName
      // this.auth.add(this.credentials).subscribe(
      //   (res)=>{ 
      //     if(res.statusCode==200){
            // this.addtoDB();
      //     }
          
      //   },
      //   err=>{
      //     console.error(err)
      //   }
      //  )
      this.auth.productUpdatedData(this.product._id,this.credentials).subscribe(
        (data:any)=>{ 
          if(data.statusCode==200){
            window.location.reload();
            console.log(data);
            return true;
          }
          
          //this.router.navigate(['seller'])
        },
   
        err=>{
          console.error(err)
          return false;
        })
      
    }

    if (this.fileUploadForm.get('uploadedImage').value) {
    const formData = new FormData();
    formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
    formData.append('agentId', '007');


     this.http
      .post<any>(this.traget +'uploadfile', formData).subscribe(response => {
        console.log(response);
        this.credentials.imgName = this.traget +'uploads/' + this.fileInputLabel;
        if (response.statusCode === 200) {
          // this.auth.add(this.credentials).subscribe(
          //   (res)=>{ 
          //     if(res.statusCode==200){
                this.addtoDB();
          //     }
              
          //   },
       
          //   err=>{
          //     console.error(err)
          //   }
          //  )
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
    }
  }

}
