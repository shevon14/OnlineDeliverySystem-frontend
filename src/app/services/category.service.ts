
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ProductDetails } from '../models/productDetails'
import { ServerStartPoint } from './server.service';


export interface categoryData {
_id: string,
category_name: string,
    category_id: string,

}

export interface removeproduct {
    _id: string,
    
    }


@Injectable({
    providedIn: 'root'
  })


  export class categoryDetailsService {

    constructor(private http: HttpClient, private router: Router,
        private serverStartPoint:ServerStartPoint) { }

    private categoryDataList: categoryData[] = [];

    private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";

    public add(category: categoryData): Observable<any> {
    console.log(category)
    const base = this.http.post(this.traget+'category/register', category)
return base
}


public categoryDetails(){ 
    return this.http.get<categoryData>(this.traget+'category/list');
  } 

public deleteCategory(code){
    return this.http.delete<categoryData>(this.traget+'category/'+code);
}

public getCategoryBYCategoryId(code){
    return this.http.get<categoryData>(this.traget+'category/getonedata/'+code);
}

// public productUpdatedData(code,product: addproduct){
//     return this.http.put<ProductDetails>(this.traget+'products/'+code,product);
// }
// public productUpdatedQuntity(code,product: addproduct){
//     return this.http.put<addproduct>(this.traget+'products/qdata/'+code,product);
// }

}