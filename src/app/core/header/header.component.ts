import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
    selector: 'rb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
                private router: Router) {
    }

    onSaveData() {
        this.dataStorageService.storageRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}