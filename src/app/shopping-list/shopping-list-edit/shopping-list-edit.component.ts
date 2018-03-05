import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

 @Output('itemEmitter') itemEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    if (nameInput.value !== null && amountInput.valueAsNumber !== null) {
      this.itemEmitter.emit(new Ingredient(nameInput.value, amountInput.valueAsNumber));
    }
  }
}
