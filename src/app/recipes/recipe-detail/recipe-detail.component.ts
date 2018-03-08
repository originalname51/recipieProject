import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppinglistService} from '../../shopping-list/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeToShow') recipeToShow: Recipe;
  constructor(private shoppingListService: ShoppinglistService) { }
  ngOnInit() {
  }

  addToShoppingList(recipe: Recipe) {
    for (const ingredient of recipe.ingredients) {
      this.shoppingListService.addItemToShoppingList(ingredient);
    }
  }
}
