import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToShow: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeToShow = this.recipeService.getRecipe(this.id);
        });

/*    this.activatedRoute.data.
    subscribe(
      (data: Data) => {
        this.recipeToShow = data['recipe'];
      }
    );*/
  }

  addToShoppingList(recipe: Recipe) {
    this.recipeService.addRecipeToShoppingList(recipe);
  }
}
