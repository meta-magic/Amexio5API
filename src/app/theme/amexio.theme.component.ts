import { Component, Input, OnInit } from "@angular/core";
import { ThemeServiceService } from "../theme-service.service";

@Component({
    selector: 'amexio-theme',
    templateUrl: './amexio.theme.component.html'
})
export class AmexioThemeComponent implements OnInit {


    @Input('data') data: any[];

    @Input('more-details') isMoreDetails : boolean;

    constructor(private themeServiceService: ThemeServiceService) {

    }

    ngOnInit() {

    }

    themeChange(theme: any) {
        debugger;
        this.themeServiceService.getTheme(theme);
    }

    onChange(value: boolean) {
        this.isMoreDetails = value;
    }

}