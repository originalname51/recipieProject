import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Test', 'Recipie description', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg'),
    new Recipe('tester', 'Recipie description', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg')
  ];


 getRecipes() {
   return this.recipes.slice();
 }

}

