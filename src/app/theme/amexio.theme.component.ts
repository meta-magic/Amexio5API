import { Component, Input, OnInit } from "@angular/core";
import { ThemeServiceService } from "../theme-service.service";

@Component({
    selector: 'amexio-theme',
    templateUrl: './amexio.theme.component.html'
})
export class AmexioThemeComponent implements OnInit {


    @Input('data') data: any[];

    @Input('more-details') isMoreDetails: boolean;

    @Input('test-mode') testmode: boolean = true;

    constructor(private service: ThemeServiceService) {

    }

    ngOnInit() {
        let responseData: any;
        this.service.loadThemes("https://raw.githubusercontent.com/meta-magic/amexio-api-website/master/api/amexio-mda.json")
            .subscribe((data) => {
                responseData = data;
            }, (error) => {
                console.log("Unable to make http call");
            }, () => {
                this.data = responseData;
            });
    }

    themeChange(theme: any) {
        this.service.switchTheme(theme);
    }

    onChange(value: boolean) {
        this.isMoreDetails = value;
    }

}