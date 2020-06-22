import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {

  constructor(private router:Router) { }

  cards = [
    {
      title: 'Item number 1',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 2',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 3',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 4',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 5',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    
  ];

  ngOnInit(): void {
  }

  addProductsClicked(){
    this.router.navigate(['seller','addProducts']);
  }

  editProductsClicked(){
    this.router.navigate(['seller','editProducts']);
  }

  deleteProduct(){
    //delete product need to connect id too
  }

  onClose(event: any) {
    console.log(event);
  }

}
