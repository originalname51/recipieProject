import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Recipie description', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg'),
    new Recipe('Test', 'Recipie description', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Schinken.jpg')
  ];
  @Output('recipeEmitter') recipeEmitter = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  emitRecipe(recipe: Recipe) {
      this.recipeEmitter.emit(recipe);
    }
}
