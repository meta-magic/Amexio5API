import {Component, Input, Renderer2, ElementRef, AfterViewInit, NgModule, ModuleWithProviders} from '@angular/core';
declare var Prism: any;
import {CommonModule, TitleCasePipe} from "@angular/common";
/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';
import { AmexioApiReferenceComponent } from './amexioStructureDemo/apiReference/amexioapireference.component';
import { AmexioStructureComponent } from "./amexioStructureDemo/amexiostructure/amexiostructure.component";
import { AmexioApiDemoComponent } from "./amexioStructureDemo/apiDemo/amexioapidemo.component";
import { AmexioApiSourceCodeComponent } from "./amexioStructureDemo/apiSourceCode/apisourcecode.component";
import { AmexioApiLiveDemoComponent } from "./amexioStructureDemo/apiLiveDemo/apilivedemo.component";
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import {RestCallService} from "./services/restcall.service";


@Component({
  selector: 'prism-block',
  template: ``,
})
export class PrismComponent implements AfterViewInit {
  @Input() code: string;
  @Input() language: string;
  private preNode: Node;
  private codeNode: Node;
  private nativeElement: Node;
  ngAfterViewInit () {
    this.preNode = this._renderer.createElement('pre');
    this.codeNode = this._renderer.createElement('code');
    this._renderer.addClass(this.codeNode, 'language-' + this.language);
    this._renderer.appendChild(this.nativeElement, this.preNode);
    this._renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code;
    Prism.highlightElement(this.codeNode);
  }
  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this.nativeElement = _el.nativeElement;

  }
}

@NgModule({
  imports: [CommonModule , AmexioWidgetModule],
  exports: [PrismComponent,AmexioApiReferenceComponent, AmexioApiLiveDemoComponent, AmexioApiSourceCodeComponent, AmexioStructureComponent, AmexioApiDemoComponent],
  declarations: [PrismComponent,AmexioApiReferenceComponent, AmexioApiLiveDemoComponent, AmexioApiSourceCodeComponent, AmexioStructureComponent, AmexioApiDemoComponent],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TitleCasePipe, RestCallService],
    };
  }
}
