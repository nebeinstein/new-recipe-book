import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
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
        // // const headers = new HttpHeaders().set('Authorization','Bearer asdfsomerandomtokenaasdf');
        // return this.httpClient.put('https://ng-recipe-book-9d465.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     // headers: headers,
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-9d465.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true
        });
        return this.httpClient.request(req);
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-9d465.firebaseio.com/recipes.json' + token)
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