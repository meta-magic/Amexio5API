
import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'amexio-api-livedemo',
   templateUrl: 'apilivedemo.component.html',
})

export class AmexioApiLiveDemoComponent implements OnInit{

  @Input('disabled') disabled: boolean;
  @Input('stackblitz-url') stackblitzUrl: string;
  @Input('stackblitz-url1') stackblitzUrl1: string;
  @Input('stackblitz-url2') stackblitzUrl2: string;

  urlSafe: SafeResourceUrl;
  urlSafe1: SafeResourceUrl;
  urlSafe2: SafeResourceUrl;


  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl);
    this.urlSafe1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl1);
    this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl2);

  }
}
