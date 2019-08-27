import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('Salmon Fish', 'This is Salmon Fish', 'E:\Learning\AngularUdemy\my-first-app/IMG_9103.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
