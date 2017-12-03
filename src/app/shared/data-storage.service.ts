import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  firebaseDB = '';
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  storeRecipes() {
    // const token = this.authService.getToken();
    return this.httpClient.put(this.firebaseDB, this.recipeService.getRecipes(), {
      observe: 'body',
      // params: new HttpParams().set('auth', token)
    });
  }

  getRecipes() {
    // const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>(this.firebaseDB, {
      observe: 'body',
      responseType: 'json',
      // params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes) => {
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}