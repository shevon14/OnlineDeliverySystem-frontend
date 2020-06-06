import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  LogInClicked(){
    this.router.navigate(['seller']);
  }

}
