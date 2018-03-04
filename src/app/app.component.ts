import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayItem = 'RECIPE';

  changeDisplayList(displayItem: {action: string}) {
    this.displayItem = displayItem.action;
  }
}
