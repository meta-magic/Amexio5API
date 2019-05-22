import { Injectable } from '@angular/core';
import { HTTPService } from './service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  rashmi = 'rashmi1';
  constructor(private httpService: HTTPService) {

  }

  getTheme(theme: any) {
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
    // this.addNewTheme(this.newThemePath, currentTheme);
    // const themeObj = {
    //     id: Math.floor(Math.random() * 9) + 1,
    //     themeName: theme.themeCssFile
    // };
    // this.cookieService.set('theme-info', JSON.stringify(themeObj));
  }

}
