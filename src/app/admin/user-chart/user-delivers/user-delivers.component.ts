import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DeliversDetailsService } from '../../../services/delivers.service';

@Component({
  selector: 'app-user-delivers',
  templateUrl: './user-delivers.component.html',
  styleUrls: ['./user-delivers.component.scss']
})
export class UserDeliversComponent implements OnInit {
  @ViewChild ('frame') public formModal: ElementRef;

  delivers:any;
  contentdeliver:any;
  openPopup:boolean =false;
  constructor( private deliversDetailsService:DeliversDetailsService) { }

  ngOnInit(): void {
    this.deliversDetailsService.fetchDeliversDetails().subscribe((res) => {
      this.delivers=res;
      console.log(res)
    },

    err => {
      console.error(err)
    }
  )
  }

  moreData(email:string){
    this.openPopup=true
    this.deliversDetailsService.getADeliversDetails(email).subscribe((res) => {
      this.delivers=res;
      console.log(res)
    },

    err => {
      console.error(err)
    }
  )
}
    


}
