import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Test', 'Recipie description', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg',
      [
        new Ingredient('wally', 2),
        new Ingredient('beef', 1)]),
    new Recipe('tester', 'Recipie description',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg',
      [
        new Ingredient('ham', 2),
        new Ingredient('green eggs', 1)])
  ];


 getRecipes() {
   return this.recipes.slice();
 }

}

