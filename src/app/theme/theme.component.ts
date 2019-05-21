/**
 * Created by sagar on 11/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { HTTPService } from '../service/http.service';

@Component({
    selector: 'theme-page',
    template: `

    <amexio-image [path]="'assets/images/logos/amexio_colors.jpeg'"[tooltip]="'Image'"></amexio-image>

    <amexio-tab-view  [closable]="false">
        <amexio-tab title="Material Design" [active]="true">
            <amexio-row *ngFor="let row of mdThemeData">
                <amexio-column [fit]="true" [size]="(12/row.length)" *ngFor="let col of row">
                    <div class="card-container">
                        <header class="card-header flex-start" [ngStyle]="{'background-color':col.navBarBGColor, 'color':col.navBarFontColor}" >
                            <amexio-label>{{col.themeName}}</amexio-label>
                        </header>
                        <div class="card-body cardbody">
                            <amexio-image [path]="'assets/images/theme-icons/'+col.themeImageFile"></amexio-image> <br/>
                            <amexio-label [size]="'small'">Version: {{col.version}}</amexio-label> <br/>
                            <amexio-label>Style: {{col.style}}</amexio-label> <br/>
                        </div> 
                        <footer class="card-footer flex-end">
                            <amexio-button [label]="'Test'" [type]="'default'" (onClick)="themeChange(col)"></amexio-button>
                        </footer>
                    </div>
                </amexio-column>
            </amexio-row>
        </amexio-tab>
        <amexio-tab title="Amexio">
            <amexio-row *ngFor="let row of amexioThemeData">
                <amexio-column [fit]="true" [size]="(12/row.length)" *ngFor="let col of row">
                    <div class="card-container">
                        <header class="card-header flex-start" [ngStyle]="{'background-color':col.navBarBGColor, 'color':col.navBarFontColor}" >
                            <amexio-label>{{col.themeName}}</amexio-label>
                        </header>
                        <div class="card-body cardbody">
                            <amexio-image [path]="'assets/images/theme-icons/'+col.link"></amexio-image> <br/>
                            <amexio-label [size]="'small'">Version: {{col.version}}</amexio-label> <br/>
                            <amexio-label>Style: {{col.style}}</amexio-label> <br/>
                        </div> 
                    </div>
                </amexio-column>
            </amexio-row>
        </amexio-tab>
        <amexio-tab title="Colors">
        Eventually we can apply this attribute [amexio-color] to all components, currently we can apply to progress bar and datapoints. 
        To know more refer the API reference section
        <amexio-datagrid title="Amexio Colors" [enable-column-fiter]="false"
        [http-method]="'get'"
        [http-url]="'assets/data/theme/amexio-colours.json'"
        [data-reader]="'colors'"
        [enable-data-filter]="false">
<amexio-data-table-column [width]="15" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                   [text]="'Name'"></amexio-data-table-column>
<amexio-data-table-column [width]="15" [data-index]="'css'" [data-type]="'string'" [hidden]="false"
[text]="'CSS Class Name'"><ng-template #amexioBodyTmpl let-column let-row="row">
<span>
[amexio-color] = '{{row.css}}' </span>
</ng-template>
</amexio-data-table-column>
<amexio-data-table-column [width]="15" [data-index]="'BG'" [data-type]="'string'" [hidden]="false"
                   [text]="'Color'">
                   <ng-template #amexioBodyTmpl let-column let-row="row">
                   <span>
                    <div [ngStyle]="{'background-color':row.BG, 'color' : row.font}">
                    This is amexio color {{ row.name }} background <b> {{ row.BG }} </b> with opposite font color <b> {{ row.font }} </b>             
                    </div>                  
                   </span>
                    </ng-template>
                   </amexio-data-table-column>
</amexio-datagrid>
        </amexio-tab>
        <amexio-tab title="Getting Started">
        <amexio-label size="large">To install the Amexio Colors:</amexio-label>
        <amexio-box background-color="blue" border="left" border-color="blue" padding="true">
            <amexio-label size="medium-bold">$ sudo npm install -g amexio-colors</amexio-label>
        </amexio-box>
        <amexio-label size="large">Check the Amexio Colors version:</amexio-label>
        <amexio-box background-color="blue" border="left" border-color="blue" padding="true" >
            <amexio-label size="medium-bold"> $ ac </amexio-label><br/>
            <amexio-label> Amexio Colors v1.0 </amexio-label><br/>
            <amexio-label> Copyright (c) 2018, MetaMagic Global Inc, NJ, USA </amexio-label><br/>
            <amexio-label> ..... </amexio-label><br/>
        </amexio-box>
        <amexio-label size="large">To Generate Amexio Material Design Themes</amexio-label>
        
        <amexio-box background-color="blue" border="left" border-color="blue" padding="true" >       
        <amexio-label size="medium-bold">$ pwd</amexio-label><br/>
        <amexio-label size="medium">/home/user/</amexio-label><br/><br/>
        <amexio-label size="medium-bold">$ mkdir mythemes</amexio-label><br/>
        <amexio-label size="medium-bold">$ echo "// Amexio Themes v0.0 " >> Themes-Data.txt</amexio-label><br/>
        <amexio-label size="medium-bold">$ echo "// Design-Type : Material Design " >> Themes-Data.txt</amexio-label><br/>
        <amexio-label size="medium-bold">$ echo "// Theme-Version : 4.0 " >> Themes-Data.txt</amexio-label><br/>
        <amexio-label size="medium-bold">$ echo "army-olive,#4B5320,#708238" >> Themes-Data.txt</amexio-label><br/>
        <amexio-label size="medium-bold">$ echo "ash-stone-black,#544C4A,#877F7D" >> Themes-Data.txt</amexio-label><br/>
        <br />
        <amexio-label size="medium-bold">$ ac Themes-Data.txt /home/user/mythemes/</amexio-label><br/>
        </amexio-box>
        <amexio-label size="large"> Amexio Colors API Documentation</amexio-label>
        <p>
        <amexio-label>
            Checkout the Amexio Colors API Documentation published in </amexio-label>
            <a href="https://meta-magic.github.io/AmexioColors/" target="_blank"> GitHub Pages</a>
            <br/>
            <amexio-label>For Testing the Themes Autogenerated by the Amexio Colors Checkout the Amexio</amexio-label>
            <a href="https://api.amexio.org" target="_blank"> API Site</a>
        </p>
            
        </amexio-tab>
    </amexio-tab-view>

  `
})
export class ThemeComponent implements OnInit {

    mdThemeData: any;
    amexioThemeData: any;
    hasThemeInit: boolean = false;
    newThemePath: string;

    constructor(private http: HttpClient, private httpService: HTTPService, private cookieService: CookieService) {
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
        // this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
        let response: any;
        this.httpService.fetch('https://api.amexio.org/api/mda/' + theme.themeJSONFile).subscribe(data => {
            response = data;
        }, error => {
        }, () => {
            let themeColor = response.themeColor;
            let appColor = response.appColor;
            let compColor = response.compColor;
            themeColor.forEach((style: any) => {
                let value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);

            });

            appColor.forEach((style: any) => {
                let value = style.value.replace(';', '');
                document.documentElement.style.setProperty(style.key, value);

            });

            compColor.forEach((style: any) => {
                document.documentElement.style.setProperty(style.key, style.value);

            });


        });

        let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
        // this.removeExistingTheme(currentTheme);
        this.addNewTheme(this.newThemePath, currentTheme);
        const themeObj = {
            id: Math.floor(Math.random() * 9) + 1,
            themeName: theme.themeCssFile
        };
        this.cookieService.set('theme-info', JSON.stringify(themeObj));
    }

}


