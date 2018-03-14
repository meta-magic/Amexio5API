/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'theme-page',
  template: `

    <amexio-image [path]="'assets/images/logos/amexio_colors.png'"[tooltip]="'Image'"></amexio-image>

    <amexio-tab-view  [closable]="false">
        <amexio-tab title="MDA" [active]="true">
            <amexio-row *ngFor="let row of mdThemeData">
                <amexio-column [size]="(12/row.length)" *ngFor="let col of row">
                    <div class="card-container">
                        <header class="card-header flex-start" [ngStyle]="{'background-color':col.navBarBGColor, 'color':col.navBarFontColor}" >
                            <amexio-label>{{col.themeName}}</amexio-label>
                        </header>
                        <div class="card-body cardbody">
                            <amexio-image [path]="'assets/images/theme-icons/'+col.link"></amexio-image> <br/>
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
                <amexio-column [size]="(12/row.length)" *ngFor="let col of row">
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
            Amexio Colors will come over here.
        </amexio-tab>
    </amexio-tab-view>

  `
})
export class ThemeComponent implements OnInit {
  
  mdThemeData : any;
  amexioThemeData : any;
  hasThemeInit : boolean = false;
  newThemePath : string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }


  ngOnInit() {

    let response:any;

    this.http.get('assets/data/theme/theme-api-showcase.json',{responseType: 'json'}).subscribe(data => {
        response = data;
      }, error => {
      }, () => {
        this.mdThemeData = response;
        
      });

      this.http.get('assets/data/theme/theme-api-showcase-amexio.json',{responseType: 'json'}).subscribe(data => {
        response = data;
      }, error => {
      }, () => {
        this.amexioThemeData = response;
        
      });      
  }

  
  addNewTheme(newTheme: any,existingTheme : any) {
    let linkEl = document.createElement('link');
    linkEl.onload = ()=>{
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
      for (let i=0; i<keyList.length; i++) {
        let key = keyList[i];
        if (key.id == 'themeid') {
          document.head.removeChild(key);
        }
      }
    }
  }  
  
  themeChange(theme: any) {
    this.newThemePath = 'assets/themes/' + theme.themeCssFile + '.css';
    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    // this.removeExistingTheme(currentTheme);
    this.addNewTheme(this.newThemePath,currentTheme);
    this.cookieService.set('theme_name_v4', theme.themeCssFile);
  }


}


