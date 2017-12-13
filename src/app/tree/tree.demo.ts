/**
 * Created by pratik on 4/12/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {AmexioDataModule, AmexioFormsModule, AmexioLayoutModule} from "amexio-ng-extensions";
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'tree-demo',
  template: `
    <h1>Tree Input Demo</h1>

    <amexio-tab-view>
      <amexio-tab title="Demo" active="true">
        <div fxLayout="row">
          <div>
            <p>Basic Tree</p>
            <amexio-treeview [dataReader]="'data'" [httpUrl]="'assets/menu.json'" [httpMethod]="'get'">

            </amexio-treeview>
          </div>
          
          <div style="padding-left: 50px;">
            <p>Tree With Template</p>
            <amexio-treeview [dataReader]="'data'" [httpUrl]="'assets/menu.json'" [httpMethod]="'get'">
              <ng-template #amexioTreeTemplate let-tree let-icon="icon" let-node="node">
                +{{tree.text}}
              </ng-template>
            </amexio-treeview>
          </div>

          <div style="padding-left: 50px;">
            <p>Tree With Checkbox</p>
            <amexio-treeview enableCheckBox="true" [dataReader]="'data'" [httpUrl]="'assets/menu.json'" [httpMethod]="'get'">
              <ng-template #amexioTreeTemplate let-tree let-icon="icon" let-node="node">
                {{tree.text}}
              </ng-template>
            </amexio-treeview>
          </div>
          
        </div>
        
      </amexio-tab>
      <amexio-tab title="Source">
        Code
      </amexio-tab>
      <amexio-tab title="Live">
        Live
      </amexio-tab>
    </amexio-tab-view>
    
   
  `
})
export class TreeDemo {
  name : string;
}

@NgModule({
  declarations: [TreeDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AmexioFormsModule,
    AmexioLayoutModule,
    FlexLayoutModule,
    AmexioDataModule,
    RouterModule.forChild([
      { path: '', component: TreeDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class TreeDemoModule {

}
