import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  navbarStatusChanged = new Subject<boolean>();
  navbarShow = true;

  constructor() { 
    this.navbarShow=true;
  }

  
  hide(){
    this.navbarShow=false;
    this.navbarStatusChanged.next(this.navbarShow);
  }

  show(){
    this.navbarShow=true;
    this.navbarStatusChanged.next(this.navbarShow);
  }

  getNavbarStatus(){
    return this.navbarShow;
    
  }
}
