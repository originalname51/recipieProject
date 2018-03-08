import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientList();
    this.shoppingListService.ingredientListener.subscribe(
      (ingredientList: Ingredient[]) => {
        this.ingredients = ingredientList;
      });
  }
}
