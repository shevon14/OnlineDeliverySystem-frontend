import { SellerDetails } from '../models/sellerDetails.models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { ServerStartPoint } from './server.service';


export interface UserDetails {
  _id: string,
  businessModel: string,
  name: string,
  shopName: string,
  businessID: string,
  address: string,
  personalPhone: string,
  officePhone: string,
  email: string,
  password: string,
  repassword: string,
  exp: number,
    iat: number
}


export interface TokenPayload {
  _id: string,
  businessModel:string, 
  name:string, 
  shopName:string,
   businessID:string, 
   address:string, 
  personalPhone:string,
  officePhone:string,
   email:string, 
   password:string

}


interface TokenResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})





export class SellerDetailsService {

  private token: string

  constructor(private http: HttpClient,
    private router: Router,private serverStartPoint:ServerStartPoint) { }

  private sellerDetails: SellerDetails[] = [];

  private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";
  private GET_SellerDetails = this.traget+"sellers/";
  private CREATE_Seller = this.traget+"sellers/";
  private EDIT_SellerDetails = this.traget+"sellers/";
  private DELETE_Seller = this.traget+"sellers/";
  private LOGIN_Seller = this.traget+"sellers/login";

  //fetch data from database
  //put all details for above array
  fetchSellerDetails() {
    return this.http.get<SellerDetails>(this.GET_SellerDetails);
  }

  //get all Sellers
  getSellers() {
    return this.sellerDetails.slice();
  }

  //get a seller
  getSeller(s: string) {
    return this.sellerDetails.find((seller1) => s === seller1._id);
  }

  //add new seller to the database
  addNewSeller(businessModel: string, name: string, shopName: string, businessID: string, addres: string,
    personalPhone: string, officePhone: string, email: string, password: string, repassword: string) {

    const sellerObj = { businessModel: businessModel, name: name, shopName: shopName, businessID: businessID, address: addres, personalPhone: personalPhone, officePhone: officePhone, email: email, password: password, repassword: repassword };
    return this.http.post(this.CREATE_Seller, sellerObj);

  }

  //update seller
  updateSeller(sellerID: string, businessModel: string, name: string, shopName: string, businessID: string, addres: string,
    personalPhone: string, officePhone: string, email: string, password: string, repassword: string) {
    const updatedSellerObj = { businessModel: businessModel, name: name, shopName: shopName, businessID: businessID, address: addres, personalPhone: personalPhone, officePhone: officePhone, email: email, password: password, repassword: repassword };
    return this.http.put(this.EDIT_SellerDetails + sellerID, updatedSellerObj);
  }
  //delete seller
  deleteSeller(sellerID) {
    return this.http.delete(this.DELETE_Seller + sellerID);
  }


  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)

    } else {
      return null
    }
  }

  public isloggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public   addNewSeller1(user: TokenPayload): Observable<any> {
    console.log(user)
    const base = this.http.post(this.CREATE_Seller, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }


  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(this.LOGIN_Seller, user)

    const request = base.pipe(
        map((data: TokenResponse) => {
            if (data.token) {
                this.saveToken(data.token)
                
            }
            return data
        })
    )
    console.log("SELLER LOGIN");
    
    return request
}

public getShopData(id:string){
  return this.http.get<TokenPayload>(  this.traget+"sellers/"+id);
}

}
