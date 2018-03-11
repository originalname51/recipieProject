import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';
import {ShoppinglistService} from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppinglistService) {}
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

 addRecipeToShoppingList(recipe: Recipe) {
  this.shoppingListService.addIngredients(recipe.ingredients);
 }

 getRecipe( id: number) {
   return this.recipes[id];
 }

}

