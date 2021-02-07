import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DeliversDetailsService, DeliversDetails } from '../../../services/delivers.service';

@Component({
  selector: 'app-user-delivers',
  templateUrl: './user-delivers.component.html',
  styleUrls: ['./user-delivers.component.scss']
})


export class UserDeliversComponent implements OnInit {
  @ViewChild ('frame') public formModal: ElementRef;

  delivers:any;
  deliversData:any;
  full_name:string;
  email:string;
  conatct:string;
  drivingLicenceId:string;
  vehicaleLicenceNumber:string;
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

  moreData(index){
    this.openPopup=true;
    this.deliversData=(this.delivers[index]);
    this.full_name=this.deliversData.full_name;
    this.email=this.deliversData.email;
    this.conatct=this.deliversData.conatct;
    this.drivingLicenceId=this.deliversData.drivingLicenceId;
    this.vehicaleLicenceNumber=this.deliversData.vehicaleLicenceNumber;
    // this.deliversDetailsService.getADeliversDetails(email).subscribe((res) => {
    //   this.delivers=res;
      console.log("res")
  //   },

  //   err => {
  //     console.error(err)
  //   }
  // )
}
    


}
