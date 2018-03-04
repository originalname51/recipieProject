import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('headerAction') headerAction = new EventEmitter<({action: string})>();

  constructor() { }

  ngOnInit() {
  }

  recipeAction() {
    this.headerAction.emit({
      action: 'RECIPE'
    });
  }

  shoppingListAction() {
    this.headerAction.emit({
      action: 'SHOPPING'
    });
  }
}
