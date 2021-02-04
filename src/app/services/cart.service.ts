
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { CartDetails } from '../models/cartDetails'
import { checkout } from '../models/checkout'
import { ServerStartPoint } from './server.service';


export interface addcart {
_id: string,
u_id : string;
productId:string;
productName:string;
uniPrice:string;
quantity:string;
total:string;
shopID:string;
}

export interface removeproduct {
    _id: string,
    
    }


@Injectable({
    providedIn: 'root'
  })


  export class cartDetailsService {

    constructor(private http: HttpClient, private router: Router,
        private serverStartPoint:ServerStartPoint) { }

    private CartDetails: CartDetails[] = [];

    private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";

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

public cartDetails(u_id){
    return this.http.get<addcart>(this.traget+'cart/'+u_id);
}

public deleteItem(_id){
    return this.http.delete<addcart>(this.traget+'cart/'+_id);
}

public removeCart(u_id){
    return this.http.delete<addcart>(this.traget+'cart/deletecart/'+u_id);
}
// public addcheckout(){
//     return this.http.get<checkout>(this.traget+'/checkout/add');
//   }



// public productUpdate(code){
//     return this.http.delete<ProductDetails>(this.traget+'products/'+code);
// }

}