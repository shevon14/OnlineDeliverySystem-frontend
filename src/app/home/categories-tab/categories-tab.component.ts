import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-tab',
  templateUrl: './categories-tab.component.html',
  styleUrls: ['./categories-tab.component.scss']
})
export class CategoriesTabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cat1Click(){
    this.router.navigate(['products']);
  }

}
