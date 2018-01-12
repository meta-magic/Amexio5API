
import {PrismComponent} from "angular-prism/dist/src/prism.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

@NgModule({
  imports: [CommonModule],
  exports: [PrismComponent],
  declarations: [PrismComponent],
  providers: [],
})
export class SharedModule {
}
