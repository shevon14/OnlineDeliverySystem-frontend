import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { categoryDetailsService } from '../../services/category.service';

@Component({
  selector: 'app-categories-tab',
  templateUrl: './categories-tab.component.html',
  styleUrls: ['./categories-tab.component.scss']
})
export class CategoriesTabComponent implements OnInit {

  allCategoryList:any;
  constructor(private router: Router,private categoryService:categoryDetailsService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  cat1Click(){
    this.router.navigate(['products']);
  }

  getAllCategory(){
    this.categoryService.categoryDetails().subscribe((list)=>{
      this.allCategoryList=list;
    },
  
    err=>{
      console.error(err)
    })
  }
}
