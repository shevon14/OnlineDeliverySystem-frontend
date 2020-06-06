import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addProductsClicked(){
    this.router.navigate(['seller','addProducts']);
  }

}
