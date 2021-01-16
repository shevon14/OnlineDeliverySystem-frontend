
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { checkout } from '../models/checkout'


export interface addcart{
    u_id: String;
    productId: String;
    productName: String;
    uniPrice: String;
    quantity: String;
    address: String;
    mobileNumber: String;
    customerName: String;
    email:String;
    payment:String;
    total:String;
    state:String;
    shopId:String;
    orderId:String;
}



@Injectable({
    providedIn: 'root'
})


export class checkCartService {

    constructor(private http: HttpClient, private router: Router) { }

    private checkCart: checkout[] = [];

    private traget = "http://localhost:3000/";

    public add(cart: addcart): Observable<any> {
        console.log(cart)
        const base = this.http.post(this.traget + 'checkout/add', cart)

        // const request = base.pipe(
        //     // map((data: TokenResponse) => {
        //     //     if (data.token) {
        //     //         this.saveToken(data.token)
        //     //     }
        //     //     return data
        //     // })
        // )
        return base
    } 

    public findHistory(u_id){
        return this.http.get<addcart>(this.traget+'checkout/aa/bb/'+u_id);
    }

    public getall(){
        return this.http.get<addcart>(this.traget+'checkout/all');
    }

    public cartDataUpdate(code,product: addcart){
        return this.http.put<addcart>(this.traget+'checkout/'+code,product);
    }
}
