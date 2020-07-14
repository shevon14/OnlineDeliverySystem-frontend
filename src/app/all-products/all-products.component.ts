import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productDetailsService} from '../services/product.service';
import { ProductDetails } from '../models/productDetails';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  productArray: ProductDetails;

  constructor(private auth:productDetailsService,
     private router:Router
    ) { }

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
    {
      title: 'Item number 6',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 7',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
    {
      title: 'Item number 8',
      img: 'https://moderndiplomacy.eu/wp-content/uploads/2019/01/rolex-oyster.jpg'
    },
  ];


  ngOnInit(): void {
    this.auth.productDetails().subscribe((list)=>{
      this.productArray = list
      console.log(this.productArray);
    });
  }

  itemDetailsClicked(){
    this.router.navigate(['itemDetail']);
  }

}
