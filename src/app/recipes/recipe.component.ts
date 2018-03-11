import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {RecipeResolver} from './recipe.resolver.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService, RecipeResolver]
})
export class RecipeComponent implements OnInit {
  recipes: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipes = recipe;
      }
    );
  }

}
