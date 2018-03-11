import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import {ShoppinglistService} from './shopping-list/shoppinglist.service';
import {AppRoutingModule} from './app-routing-module';
import { HomeComponent } from './home/home.component';
import {RecipeResolver} from './recipes/recipe.resolver.service';
import {RecipeService} from './recipes/recipe.service';
import { DefaultRecipeComponent } from './recipes/default-recipe/default-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirectiveDirective,
    HomeComponent,
    DefaultRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppinglistService, RecipeService, RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
