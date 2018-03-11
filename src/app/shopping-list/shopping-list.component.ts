import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientList();
    this.subscription = this.shoppingListService.ingredientListener.subscribe(
      (ingredientList: Ingredient[]) => {
        this.ingredients = ingredientList;
      });
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}

