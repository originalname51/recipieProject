import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeToShow') recipeToShow: Recipe;
  constructor() { }
  ngOnInit() {
  }

  showDescription() {
    return this.recipeToShow === undefined ? '' : this.recipeToShow.description;
  }

  showName() {
    return this.recipeToShow === undefined ? '' : this.recipeToShow.description;
  }
}
