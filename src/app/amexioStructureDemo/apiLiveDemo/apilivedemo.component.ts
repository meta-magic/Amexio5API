
import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'amexio-api-livedemo',
   templateUrl: 'apilivedemo.component.html',
})

export class AmexioApiLiveDemoComponent implements OnInit{

  @Input('disabled') disabled: boolean;
  @Input('stackblitz-url') stackblitzUrl: string;

  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.stackblitzUrl);
  }
}
