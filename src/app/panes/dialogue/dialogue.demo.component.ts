/**
 * Created by pratik on 16/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dialogue-demo', template: `
    <amexio-card header="true">
      <amexio-header>
        dialogue
      </amexio-header>
      <amexio-body>
        <p>A Simple dialogue which renders various prompts like Confirmation/Alert based on type, title, body user has
          configured.</p>
        <amexio-tab-view>
          <amexio-tab title="Demo" active="true">
            <amexio-row>
              <amexio-column size="12">
                <amexio-row>
                  <amexio-column [size]="4" >

                    <amexio-button type="primary" (onClick)="toggleConfirm('material')" label="Confirm"></amexio-button>
                    <amexio-dialogue  [(show)]="confirmdialoguematerial"  [button-size]="'medium'"  [material-design]="true" [title]="'Confirm'" [message]="'Are you sure ?'"
                                      [message-type]="'confirm'" >
                    </amexio-dialogue>

                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="danger" (onClick)="toggleError('material')" label="Error"></amexio-button>
                    <amexio-dialogue [(show)]="errordialoguematerial"  [close-on-escape]="true"  [material-design]="true" [message]="'Error Occurred.'" [primary-action-label]="'Ok'"
                                     [title]="'Error'" [message-type]="'error'" [type]="'alert'">

                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button [type]="'warning'" (onClick)="toggleWarning('material')" label="Warning"></amexio-button>
                    <amexio-dialogue [(show)]="warningdialoguematerial"  [material-design]="true"  [message]="'Data not found.'" [title]="'Warning'"
                                     [message-type]="'warning'" [type]="'alert'">
                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="primary" (onClick)="toggleHelp('material')" label="Help"></amexio-button>
                    <amexio-dialogue [(show)]="helpdialoguematerial"  [material-design]="true" [title]="'Help'" [message]="'Check Server.'"
                                     [message-type]="'help'" [type]="'alert'">
                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="primary" (onClick)="toggleCustom('material')" label="Custom"></amexio-button>
                    <amexio-dialogue [(show)]="customdialoguematerial"  [material-design]="true" [close-on-escape]="false" [custom]="true" [title]="'Custom dialogue'"
                                     [type]="'confirm'">

                      <amexio-body>
                        <amexio-text-input field-label="Name" name="name"
                                           place-holder="Enter name"
                                           icon-feedback="true"
                        ></amexio-text-input><br>
                      </amexio-body>
                      <amexio-action>
                        <amexio-button type="primary" (onClick)="toggleCustom('material')" label="save"></amexio-button>
                      </amexio-action>
                    </amexio-dialogue>
                    <amexio-row>
                      <amexio-column [size]="'12'">
                        <amexio-label
                          size="small">
                          (Escape functionality is disabled)
                        </amexio-label>
                      </amexio-column>
                    </amexio-row>

                  </amexio-column>


                  

                </amexio-row>
                <amexio-row>
                  <amexio-column [size]="4" >

                    <amexio-button type="primary" (onClick)="toggleConfirm('nonmaterial')" label="Confirm"></amexio-button>
                    <amexio-dialogue  [(show)]="confirmdialoguenonmaterial"  [button-size]="'medium'"  [material-design]="false" [title]="'Confirm'" [message]="'Are you sure ?'"
                                      [message-type]="'confirm'" >
                    </amexio-dialogue>

                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="danger" (onClick)="toggleError('nonmaterial')" label="Error"></amexio-button>
                    <amexio-dialogue [(show)]="errordialoguenonmaterial"  [close-on-escape]="true"  [material-design]="false" [message]="'Error Occurred.'" [primary-action-label]="'Ok'"
                                     [title]="'Error'" [message-type]="'error'" [type]="'alert'">

                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button [type]="'warning'" (onClick)="toggleWarning('nonmaterial')" label="Warning"></amexio-button>
                    <amexio-dialogue [(show)]="warningdialoguenonmaterial"  [material-design]="false"  [message]="'Data not found.'" [title]="'Warning'"
                                     [message-type]="'warning'" [type]="'alert'">
                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="primary" (onClick)="toggleHelp('nonmaterial')" label="Help"></amexio-button>
                    <amexio-dialogue [(show)]="helpdialoguenonmaterial"  [material-design]="false" [title]="'Help'" [message]="'Check Server.'"
                                     [message-type]="'help'" [type]="'alert'">
                    </amexio-dialogue>
                  </amexio-column>
                  <amexio-column [size]="4">
                    <amexio-button type="primary" (onClick)="toggleCustom('nonmaterial')" label="Custom"></amexio-button>
                    <amexio-dialogue [(show)]="customdialoguenonmaterial"  [material-design]="false" [close-on-escape]="false" [custom]="true" [title]="'Custom dialogue'"
                                     [type]="'confirm'">

                      <amexio-body>
                        <amexio-text-input field-label="Name" name="name"
                                           place-holder="Enter name"
                                           icon-feedback="true"
                        ></amexio-text-input><br>
                      </amexio-body>
                      <amexio-action>
                        <amexio-button type="primary" (onClick)="toggleCustom('nonmaterial')" label="save"></amexio-button>
                      </amexio-action>
                    </amexio-dialogue>
                    <amexio-row>
                      <amexio-column [size]="'12'">
                        <amexio-label
                          size="small">
                          (Escape functionality is disabled)
                        </amexio-label>
                      </amexio-column>
                    </amexio-row>

                  </amexio-column>

                </amexio-row>
              </amexio-column>
            </amexio-row>
          
            
              
            
            
          </amexio-tab>
          <amexio-tab title="API Reference">
            <amexio-datagrid title="Properties <amexio-dialogue>" [enable-column-fiter]="false"
                             [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/dialogue/dialogue.json'"
                             [data-reader]="'properties'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [width]="20" [data-index]="'name'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'type'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Type'"></amexio-data-table-column>
              <amexio-data-table-column [width]="10" [data-index]="'default'" [data-type]="'string'" [hidden]="false"
                                        [text]="'Default'"></amexio-data-table-column>
              <amexio-data-table-column [width]="65" [data-index]="'description'" [data-type]="'string'"
                                        [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
            <br>
            <amexio-datagrid title="Events" [http-method]="'get'"
                             [http-url]="'assets/apireference/panes/dialogue/dialogue.json'" [data-reader]="'events'"
                             [enable-data-filter]="false">
              <amexio-data-table-column [data-index]="'name'" [width]="20" [data-type]="'string'" [hidden]="false"
                                        [text]="'Name'"></amexio-data-table-column>
              <amexio-data-table-column [data-index]="'description'" [width]="65" [data-type]="'string'" [hidden]="false"
                                        [text]="'Description'"></amexio-data-table-column>
            </amexio-datagrid>
          </amexio-tab>
          <amexio-tab title="Source">
            <div style="overflow-y: scroll">
            <amexio-vertical-tab-view>
              <amexio-tab title="HTML" [active]="true">
                <ng-container *ngIf="htmlCode">
                  <!--<clip-copy [htmlCode]="htmlCode" (onClick)="onCopyClick()"></clip-copy>-->
                  <prism-block [code]="htmlCode" [language]="'html'"></prism-block>
                </ng-container>
              </amexio-tab>
              <amexio-tab title="Type Script">
                <ng-container *ngIf="typeScriptCode">
                  <prism-block [code]="typeScriptCode" [language]="'typescript'"></prism-block>
                </ng-container>
              </amexio-tab>
            </amexio-vertical-tab-view>
            </div>
          </amexio-tab>
          <amexio-tab title="Live">
          <p align="center">Amexio Sandbox</p>
            <iframe style="width: 100%; height: 600px" src="https://stackblitz.com/edit/amexio-v4-dialogue?embed=1&file=app/panels/dialogue/dialogue.demo.html" frameborder="0" allowfullscren="allowfullscren"></iframe>
          </amexio-tab>
        </amexio-tab-view>
      </amexio-body>
    </amexio-card>
  `
})

export class DialogueDemoComponent {

  showBasicWindow: boolean;
  showMaxWindow: boolean;
  showClosable: boolean;

  confirmdialoguematerial: boolean;
  confirmdialoguenonmaterial:boolean;

  errordialoguematerial: boolean;
  errordialoguenonmaterial:boolean;

  warningdialoguematerial: boolean;
  warningdialoguenonmaterial: boolean;

  helpdialoguenonmaterial:boolean;
  helpdialoguematerial:boolean;

  customdialoguematerial: boolean;
  customdialoguenonmaterial:boolean;


  helpdialogue: boolean;
  htmlCode: string;
  typeScriptCode: string;
  copyMsgArray: any[];
  asyncFlag: boolean;



  constructor(private http: HttpClient) {
    this.getHtmlAndTypeScriptCode();
   }

  getDta() {
    this.asyncFlag = true;
    setTimeout(() => {
      this.asyncFlag = false;
    }, 3000);
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/pane/dialogue/dialogue.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/pane/dialogue/dialogue.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });

  }

  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }


  toggleConfirm(data: any) {
    if(data=='material'){
      this.confirmdialoguematerial = !this.confirmdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.confirmdialoguenonmaterial = !this.confirmdialoguenonmaterial;

    }
  }

  toggleError(data:any) {
    if(data=='material'){
      this.errordialoguematerial = !this.errordialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.errordialoguenonmaterial = !this.errordialoguenonmaterial;

    }
  }


  toggleWarning(data:any) {
    if(data=='material'){
      this.warningdialoguematerial = !this.warningdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.warningdialoguenonmaterial = !this.warningdialoguenonmaterial;

    }
  }

  toggleHelp(data:any) {
    if(data=='material'){
      this.helpdialoguematerial = !this.helpdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.helpdialoguenonmaterial = !this.helpdialoguenonmaterial;

    }
  }


  toggleCustom(data:any) {
    if(data=='material'){
      this.customdialoguematerial = !this.customdialoguematerial;
    }
    else if(data=='nonmaterial'){
      this.customdialoguenonmaterial = !this.customdialoguenonmaterial;

    }
  }

}
