import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  elements: any = [
    {id: 1, name: 'rolex watch', quantity: '1', price: 'Rs.3000'},
    {id: 2, name: 'head set', quantity: '2', price: 'Rs.1920'},
    {id: 3, name: 'mobile charger', quantity: '1', price: 'Rs.600'},
  ];

  headElements = ['ID', 'Name', 'Qtn.', 'Price', '' ,'Remove'];

  ngOnInit(): void {
  }

  itemrawclicked(){
    this.router.navigate(['itemDetail']);
  }

}
