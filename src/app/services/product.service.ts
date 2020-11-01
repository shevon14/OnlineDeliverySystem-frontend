
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ProductDetails } from '../models/productDetails'


export interface addproduct {
_id: string,
productName: string,
uniPrice: string,
availableQuantity: string,
category: string,
imgName : String
// shopename:string

}

export interface removeproduct {
    _id: string,
    
    }


@Injectable({
    providedIn: 'root'
  })


  export class productDetailsService {

    constructor(private http: HttpClient, private router: Router) { }

    private ProductDetails: ProductDetails[] = [];

    private traget = "http://localhost:3000/";

    public add(product: addproduct): Observable<any> {
    console.log(product)
    const base = this.http.post(this.traget+'products/register', product)

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


public productDetails(){ 
    return this.http.get<ProductDetails>(this.traget+'products/list');
  } 

public deleteProduct(code){
    return this.http.delete<ProductDetails>(this.traget+'products/'+code);
}

public productDetailsField(code){
    return this.http.get<ProductDetails>(this.traget+'products/'+code);
}

public productUpdate(code){
    return this.http.delete<ProductDetails>(this.traget+'products/'+code);
}

public findProduct(uid){
    return this.http.get<ProductDetails>(this.traget+'products/'+uid);
}

}