import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

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
        HomeComponent
    ],
    // other modules this module uses
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
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
