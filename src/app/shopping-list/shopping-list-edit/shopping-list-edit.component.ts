import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient/ingredient.model';
import {ShoppinglistService} from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
  }

  addNewItem() {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = this.amountInputRef.nativeElement.valueAsNumber;
    if (ingName !== '' && !isNaN(ingAmount)) {
     this.shoppingListService.addItemToShoppingList(new Ingredient(ingName, ingAmount));
    }
  }
}
