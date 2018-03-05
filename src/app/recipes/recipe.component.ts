import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  passToRecipeDetail(recipe: Recipe ) {
    this.recipe = recipe;
    console.log('recipe name is : ' + recipe.name);
  }
}
