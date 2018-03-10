import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipeComponent} from './recipes/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
