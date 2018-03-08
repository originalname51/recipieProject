import { Component } from '@angular/core';
import {ShoppinglistService} from './shopping-list/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppinglistService]
})
export class AppComponent {
  displayItem = 'RECIPE';

  changeDisplayList(displayItem: {action: string}) {
    this.displayItem = displayItem.action;
  }
}
