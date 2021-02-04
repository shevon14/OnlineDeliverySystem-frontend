import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ServerStartPoint } from './server.service';

export interface DeliversDetails {
    _id: string,
    full_name: string,
        email:string,
        conatct: string,
        address: string,
        drivingLicenceId: string,
        vehicaleType:string,
        vehicaleLicenceNumber: string,
        password: string,
        user_type: string,
        created: string
}



@Injectable({
    providedIn: 'root'
  })

export class DeliversDetailsService {

    constructor(private http: HttpClient, private router: Router,
    private serverStartPoint:ServerStartPoint) { }


    private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";

    public fetchDeliversDetails(){
        return this.http.get<DeliversDetails>( this.traget+'delivers/alldata');
      }

      public getADeliversDetails(email:string){
        return this.http.get<DeliversDetails>( this.traget+'delivers/'+email);
      }
      
}