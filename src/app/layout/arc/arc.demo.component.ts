import { Component, OnInit } from "@angular/core";
import { DYNAMIC_CLASS_1 } from "./arc.const";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'arc-demo',
    templateUrl: './arc.demo.component.html'
})
export class ArcDemoComponent implements OnInit {

    htmltemplate: string;

    tscode: any;

    constructor(private http: HttpClient) {
        this.tscode = DYNAMIC_CLASS_1;
    }

    ngOnInit() {
        this.http.get("assets/arc.json")
            .subscribe((resp: any) => {
                this.htmltemplate = resp.html;
                this.tscode = DYNAMIC_CLASS_1;
            });
    }

    onARCInit(event: any) {
        console.log("Called when Amexio runtime component is initialized ", event);
    }
}