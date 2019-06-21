/**
 * Created by sagar on 17/01/17.
 */
import {NgModule, Component} from '@angular/core'
import {RouterModule, Router} from '@angular/router'
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AmexioWidgetModule, AmexioEnterpriseModule} from "amexio-ng-extensions";
import {SharedModule} from "../shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'getting-started-beta',
  templateUrl :'./gettingstartedbeta.html'
})
export class GettingStartedBetaDemo {
  tsCode: any;
  tsCodeD3: any;
  iconCode : any;
  dataCode : any;
  styleCode : any;
  modulesData : any;
  tsCodeV32 : any;
  tsCodeV1x : any;
  constructor(private http:HttpClient, private route:Router) {
    this.getHtmlAndTypeScriptCode();
  }

  previous(){
    this.route.navigate(['concept-page']);
  }

  next(){
      this.route.navigate(['amexio-colors']);
  }

  onLinkClick(link:string)
  {
    window.open(link,'_blank');
  }
  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseTs: any;
    //TS FILE
    this.http.get('assets/data/code/gettingstated/gettingstated.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.tsCode = responseTs;
    });

    this.http.get('assets/data/code/gettingstated/d3gettingstated.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.tsCodeD3 = responseTs;
    });

    this.http.get('assets/data/code/gettingstated/icon.text',{responseType: 'text'}).subscribe(data=>{
      this.iconCode = data;
    });

    this.http.get('assets/data/code/gettingstated/data.text',{responseType: 'text'}).subscribe(data=>{
      this.dataCode = data;
    });

    this.http.get('assets/data/code/gettingstated/style.text',{responseType: 'text'}).subscribe(data=>{
      this.styleCode = data;
    });

    this.http.get('assets/apireference/modules/modules.json').subscribe(
      data=>{
        let response : any = data;
        this.modulesData = response.properties.sort((a : any, b : any)=>{
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
      }
    );

    this.http.get('assets/data/code/gettingstated/gettingstatedv32.text',{responseType: 'text'}).subscribe(
      data=>{
        this.tsCodeV32 = data;
      }
    );
    this.http.get('assets/data/code/gettingstated/gettingstatedv1x.text',{responseType: 'text'}).subscribe(
      data=>{
        this.tsCodeV1x = data;
      }
    );
  }
}
@NgModule({
  declarations: [GettingStartedBetaDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AmexioWidgetModule,
    AmexioEnterpriseModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: GettingStartedBetaDemo, pathMatch: 'full'}
    ])
  ],
  providers : []
})
export class GettingStartedBetaModule {

}
