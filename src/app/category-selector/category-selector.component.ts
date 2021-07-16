import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category/category.service";

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory();
  }

}
