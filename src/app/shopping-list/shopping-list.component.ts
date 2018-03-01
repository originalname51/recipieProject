import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banans', 10),
    new Ingredient('Kiwi', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
