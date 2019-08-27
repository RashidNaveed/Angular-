import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Salmon Fish', 'This is Salmon Fish', 'https://www.jessicagavin.com/wp-content/uploads/2019/01/baked-salmon-8-1200.jpg'),
    new Recipe('Seabass Fish', 'This is Seabass Fish', 'https://gbc-cdn-public-media.azureedge.net/img15745.768x512.jpg')
  ];
  constructor() {}

  ngOnInit() {}
}
