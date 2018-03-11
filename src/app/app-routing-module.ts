import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipeComponent} from './recipes/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {DefaultRecipeComponent} from './recipes/default-recipe/default-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'} ,
  {path: 'recipe', component: RecipeComponent, children: [
      {path: '', component: DefaultRecipeComponent },
      {path: 'new', component: RecipeEditComponent },
      {path: ':id', component: RecipeDetailComponent },
      {path: ':id/edit', component: RecipeEditComponent }
    ]},
  {path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
