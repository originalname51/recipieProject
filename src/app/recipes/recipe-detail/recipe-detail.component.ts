import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeToShow: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

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

  onEdit() {
    // this.router.navigate([this.id, 'edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
}
