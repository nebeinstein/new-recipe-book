import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'rb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyBYJ-pMOPdqCxPm2ozySHkWMmA0IAGXgZ8",
            authDomain: "ng-recipe-book-9d465.firebaseapp.com"
        });
    }

    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
}
