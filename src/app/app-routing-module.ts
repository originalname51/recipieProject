import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipeComponent} from './recipes/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeResolver} from './recipes/recipe.resolver.service';
import {DefaultRecipeComponent} from './recipes/default-recipe/default-recipe.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'} ,
  {path: 'recipe', component: RecipeComponent, children: [
      {path: '', component: DefaultRecipeComponent },
      {path: ':id', component: RecipeDetailComponent, resolve: {recipe: RecipeResolver} },
      {path: ':id/edit', component: RecipeDetailComponent }
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
