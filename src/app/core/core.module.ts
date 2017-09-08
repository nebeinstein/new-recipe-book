import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { AuthInterceptor } from '../shared/auth.interceptor';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        HeaderComponent,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        DataStorageService,
        RecipeService,
        ShoppingListService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }