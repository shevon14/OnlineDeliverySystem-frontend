import { SellerDetails } from './../models/sellerDetails.models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerDetailsService {

  constructor(private http:HttpClient,
              private router:Router) { }

  private sellerDetails: SellerDetails[] = [];

  private GET_SellerDetails = "http://localhost:3000/sellers/";
  private CREATE_Seller = "http://localhost:3000/sellers/";
  private EDIT_SellerDetails = "http://localhost:3000/sellers/";
  private DELETE_Seller = "http://localhost:3000/sellers/";
              
//fetch data from database
//put all details for above array
fetchSellerDetails(){
  return this.http.get<SellerDetails>(this.GET_SellerDetails);
}

//get all Sellers
getSellers(){
  return this.sellerDetails.slice();
}

//get a seller
getSeller(s:string){
  return this.sellerDetails.find((seller1)=>s===seller1._id);
}

//add new seller to the database
addNewSeller(businessModel:string, name:string, shopName:string, businessID:string, addres:string, 
  personalPhone:string,officePhone:string, email:string, password:string, repassword:string){

    const sellerObj = {businessModel:businessModel,name: name, shopName: shopName, businessID:businessID, address :addres,personalPhone:personalPhone, officePhone:officePhone, email:email, password:password, repassword:repassword};
    return this.http.post(this.CREATE_Seller,sellerObj);

  }
//update seller
updateSeller(sellerID:string, businessModel:string, name:string, shopName:string, businessID:string, addres:string, 
  personalPhone:string,officePhone:string, email:string, password:string, repassword:string){
    const updatedSellerObj = {businessModel:businessModel,name: name, shopName: shopName, businessID:businessID, address :addres,personalPhone:personalPhone, officePhone:officePhone, email:email, password:password, repassword:repassword};
    return this.http.put(this.EDIT_SellerDetails+sellerID,updatedSellerObj);
  }
//delete seller
deleteSeller(sellerID){
    return this.http.delete(this.DELETE_Seller+sellerID);
  }

}
