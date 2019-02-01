
import { Component, OnInit, Input, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { AmexioApiReferenceComponent } from '../apiReference/amexioapireference.component';
import { AmexioApiSourceCodeComponent } from '../apiSourceCode/apisourcecode.component';
import { AmexioApiLiveDemoComponent } from '../apiLiveDemo/apilivedemo.component';
@Component({
  selector: 'amexio-api-structure',
  templateUrl: 'amexiostructure.component.html',
})

export class AmexioStructureComponent implements OnInit, AfterContentInit {

  @Input('title') title: string;

  @Input('description') description: string;


  amexoiApiRef: AmexioApiReferenceComponent;
  @ContentChildren(AmexioApiReferenceComponent) apiRefernce: QueryList<AmexioApiReferenceComponent>;
  listOfAPIReference: AmexioApiReferenceComponent[];

  @ContentChildren(AmexioApiSourceCodeComponent) apiSourceCode: QueryList<AmexioApiSourceCodeComponent>;
  listOfApiSourceCode: AmexioApiSourceCodeComponent[];
  amexioApiSourceCode: AmexioApiSourceCodeComponent;

  @ContentChildren(AmexioApiLiveDemoComponent) apiLiveDemo: QueryList<AmexioApiLiveDemoComponent>;
  listOfLiveDemoComponent: AmexioApiLiveDemoComponent[];
  liveDemoComponent: AmexioApiLiveDemoComponent;

  constructor() {


  }


  ngAfterContentInit() {
    this.listOfAPIReference = this.apiRefernce.toArray();
    if (this.listOfAPIReference && this.listOfAPIReference.length > 0) {
      this.amexoiApiRef = this.listOfAPIReference[0];
    }

    this.listOfApiSourceCode = this.apiSourceCode.toArray();
    if (this.listOfApiSourceCode && this.listOfApiSourceCode.length > 0) {
      this.amexioApiSourceCode = this.listOfApiSourceCode[0];
    }

    this.listOfLiveDemoComponent = this.apiLiveDemo.toArray();
    if (this.listOfLiveDemoComponent && this.listOfLiveDemoComponent.length > 0) {
      this.liveDemoComponent = this.listOfLiveDemoComponent[0];
    }
  }
  ngOnInit() {

  }


}
