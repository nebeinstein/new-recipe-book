import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { DropdownDirective } from './shared/dropdown.directive';

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
        ShoppingEditComponent,
        ShoppingListComponent,
        SigninComponent,
        SignupComponent,
        DropdownDirective
    ],
    // other modules this module uses
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RecipesModule
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
