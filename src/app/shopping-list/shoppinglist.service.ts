import {Ingredient} from '../shared/ingredient/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppinglistService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banans', 10),
    new Ingredient('Kiwi', 4)
  ];

  public ingredientListener = new Subject<Ingredient[]>();



  addItemToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientListener.next(
      this.ingredients.slice()
      );
  }

  getIngredientList() {
    return this.ingredients.slice();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientListener.next(this.ingredients.slice());
  }
}
