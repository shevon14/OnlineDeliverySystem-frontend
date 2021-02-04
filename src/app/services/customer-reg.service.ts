import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

import { CustomerDetails } from '../models/customerDetails';
import { ServerStartPoint } from './server.service';

export interface UserDetails {
    _id: string,
    full_name: string,
    conatct:string,
   // last_name: string,
    email: string,
    address:string,
    postalcode:string,
    password: string,
    user_type: string,
    exp: number,
    iat: number
}

interface TokenResponse {
    token: string
}

export interface TokenPayload {
    _id: string,
    full_name: string,
    conatct:string,
  //  last_name: string,
    email: string,
    address:string,
    postalcode:string,
    password: string,
    user_type: string

}



@Injectable({
    providedIn: 'root'
  })

export class CustomerDetailsService {
    private token: string

    constructor(private http: HttpClient, private router: Router,
        private serverStartPoint:ServerStartPoint) { }

    private customerDetails: CustomerDetails[] = [];

    private traget = this.serverStartPoint.getStartPoint();//"http://localhost:3000/";

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

    public register(user: TokenPayload): Observable<any> {
        console.log(user)
        const base = this.http.post(this.traget+'customers/register', user)

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
        const base = this.http.post(this.traget+'customers/login', user)

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token)
                    this.router.navigate([''])
                }
                return data
            })
        )
        console.log("customer login");
        return request
    }


    public profile(): Observable<any> {
        return this.http.get(this.traget+'customers/profile', {
            headers: { Authorization: '${this.getToken()}' }
        })
    }

    public logout(): void {
        this.token = ''
        window.localStorage.removeItem('usertoken')
        this.router.navigateByUrl('/')
        console.log("tocken set to - " + this.token)
    }

    //details new
    // public detailes():Observable<any> {
    //     return this.http.get('/users/details',{
    //         headers: { Authorization: '${this.getToken()}' }   this.traget+'customersDetails'
    //     })

    // }

    public fetchCustomerDetails(){
        return this.http.get<CustomerDetails>( this.traget+'customers/alldata');
      }

}