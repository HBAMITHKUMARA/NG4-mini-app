import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  firebaseDB: string = 'https://ami-recipe-book.firebaseio.com/recipes.json';
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(this.firebaseDB, this.recipeService.getRecipes());
  }

}
