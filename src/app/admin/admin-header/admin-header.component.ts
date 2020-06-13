import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})

export class AdminHeaderComponent implements OnInit {
   
// user_types=[

// {"id":1,"type_name":"Sellers"},
// {"id":2,"type_name":"Customers"},
// {"id":3,"type_name":"Delivers"},
// ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

// <<<<<<< HEAD
//   UsersClicked(user_types){
//     this.router.navigateByUrl('/admin/users/'+user_types.type_name);
//     // this.router.navigate(['admin','users',user_types.type_name]);
//   }
// =======
  UsersClicked(user_types){
    this.router.navigate(['admin','users',user_types.type_name]);
  }
// >>>>>>> 6be9ae62c130a4dcdec8314171795b30e226e4bb

  sellerClicks(){
    this.router.navigate(['admin','userSellers']);
  }

}

