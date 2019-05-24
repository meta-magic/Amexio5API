/**
 * Created by sagar on 11/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { HTTPService } from '../service/http.service';
import {ThemeServiceService} from '../theme-service.service';

@Component({
    selector: 'theme-page',
    templateUrl: './theme.component.html'
})
export class ThemeComponent implements OnInit {

    mdThemeData: any;
    amexioThemeData: any;
    hasThemeInit: boolean = false;
    newThemePath: string;

    constructor(private http: HttpClient, private httpService: HTTPService, private cookieService: CookieService, private themeServiceService: ThemeServiceService) {
    }


    ngOnInit() {

        let response: any;

        this.http.get('assets/data/theme/themes-api-showcase.json', { responseType: 'json' }).subscribe(data => {
            response = data;
        }, error => {
        }, () => {
            this.mdThemeData = response;

        });

        this.http.get('assets/data/theme/theme-api-showcase-amexio.json', { responseType: 'json' }).subscribe(data => {
            response = data;
        }, error => {
        }, () => {
            this.amexioThemeData = response;

        });
    }


    addNewTheme(newTheme: any, existingTheme: any) {
        let linkEl = document.createElement('link');
        linkEl.onload = () => {
            this.removeExistingTheme(existingTheme);

        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    }

    //removed old theme css
    removeExistingTheme(keyList: any) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (let i = 0; i < keyList.length; i++) {
                let key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    }

    themeChange(theme: any) {
    this.themeServiceService.switchTheme(theme);
    }

}


