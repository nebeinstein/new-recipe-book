import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';

// The module basically wraps the app and defines what features are used in it
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
        CoreModule,
        SharedModule,
        ShoppingListModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
