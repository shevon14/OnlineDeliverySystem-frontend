import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { AuthenticationService, UserDetails } from '../../authentication.service';

@Component({
  selector: 'app-request-shop',
  templateUrl: './request-shop.component.html',
  styleUrls: ['./request-shop.component.scss']
})
export class RequestShopComponent implements OnInit {

  request_details:UserDetails
  popup_details:UserDetails
  display_popup=false

  @ViewChild(MdbTableDirective,
    { static: true }) 
    mdbTable: MdbTableDirective;
  headElements = ['ID', 'Owner Name', 'Shop Name', 'Address', 'Conatact'];

  // users:any 

  constructor(private auth:AuthenticationService) {}

  ngOnInit(): void {
    this.auth.detailes().subscribe(
      user=>{
        this.request_details=user
        console.log(this.request_details[0])
      },
      err =>{
        console.error(err)
      }
    )
  }
    
openpopup(frame,index){
  frame.show()
  this.display_popup=true
  this.popup_details=index
alert('Task:' +index.first_name)
console.log(index.first_name)
}

close(frame){
  frame.hide()
}
    
}