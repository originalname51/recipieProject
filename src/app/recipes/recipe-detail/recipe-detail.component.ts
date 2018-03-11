import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToShow: Recipe;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.
    subscribe(
      (data: Data) => {
        this.recipeToShow = data['recipe'];
      }
    );
  }

  addToShoppingList(recipe: Recipe) {
    this.recipeService.addRecipeToShoppingList(recipe);
  }
}
