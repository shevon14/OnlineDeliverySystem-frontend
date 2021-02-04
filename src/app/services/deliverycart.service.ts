
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { checkout } from '../models/checkout'
import { ServerStartPoint } from './server.service';


export interface adddeliverycart{
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
    deliverPersonId:String;
    orderId:String;

}



@Injectable({
    providedIn: 'root'
})


export class deliveryCartService {

    constructor(private http: HttpClient, private router: Router,
        private serverStartPoint:ServerStartPoint) { }

    private checkCart: checkout[] = [];

    private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";

    public add(cart: adddeliverycart): Observable<any> {
        console.log(cart)
        const base = this.http.post(this.traget + 'deliverycart/register', cart)

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
}