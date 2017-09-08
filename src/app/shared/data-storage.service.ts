import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {
    }

    storageRecipes() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://ng-recipe-book-9d465.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-9d465.firebaseio.com/recipes.json?auth=' + token)
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-9d465.firebaseio.com/recipes.json?auth=' + token, {
        //     // options in a js object
        //     observe: 'body',
        //     responseType: 'json' //default is 'json', 'blob' if you're downloading a file, 'arraybuffer' if you want to buffer some data
        // })
        .map(
            (recipes) => {
                // console.log(recipes);
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
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