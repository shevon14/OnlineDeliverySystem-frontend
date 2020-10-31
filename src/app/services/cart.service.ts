
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { CartDetails } from '../models/cartDetails'


export interface addcart {
// _id: string,
u_id: string,
productId: string,
}

export interface removeproduct {
    _id: string,
    
    }


@Injectable({
    providedIn: 'root'
  })


  export class cartDetailsService {

    constructor(private http: HttpClient, private router: Router) { }

    private CartDetails: CartDetails[] = [];

    private traget = "http://localhost:3000/";

    public add(cart: addcart): Observable<any> {
    console.log(cart)
    const base = this.http.post(this.traget+'cart/register', cart)

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


// public productDetails(){
//     return this.http.get<ProductDetails>(this.traget+'products/list');
//   }

// public deleteProduct(code){
//     return this.http.delete<ProductDetails>(this.traget+'products/'+code);
// }

// public productDetailsField(code){
//     return this.http.get<ProductDetails>(this.traget+'products/'+code);
// }

// public productUpdate(code){
//     return this.http.delete<ProductDetails>(this.traget+'products/'+code);
// }

}