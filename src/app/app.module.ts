import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

// The module basically wraps the app and defines what features are used in it
@NgModule({
    // Components, directives, pipes this module uses
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent
    ],
    // other modules this module uses
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        RecipesModule,
        SharedModule,
        ShoppingListModule
    ],
    // which services the module uses
    providers: [
        AuthGuard,
        AuthService,
        DataStorageService,
        RecipeService,
        ShoppingListService
    ],
    // defines the root component 
    bootstrap: [AppComponent]
})
export class AppModule { }
