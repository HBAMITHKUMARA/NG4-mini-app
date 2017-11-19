import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  firebaseDB: string = '';
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(this.firebaseDB, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get(this.firebaseDB)
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
