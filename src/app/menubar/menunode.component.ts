/**
 * Created by ketangote on 12/8/17.
 */






import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'amexio-menu-node',
  template: `

    <a (click)="onNodeClick(node)"><i *ngIf="node.icon" [ngClass]="node.icon" aria-hidden="true"></i>&nbsp;&nbsp;{{node.text}}</a>
    
    <ng-container *ngIf="(node.childrens && node.childrens[0].childrens)" >

      <div *ngIf="(node.childrens && node.childrens.length>0)" class="menu-content" [ngClass]="{'menu-content-display':node.expand,' menu-content-left': (node.childrens && node.childrens.length>3)}">
        <ul class="menu-content-cols">

          <li class="col-menu-nodes"
              [ngClass]="{'col-menu-nodes-fixed': (node.childrens && node.childrens.length<4), 
                      'col-menu-nodes-percentage': (node.childrens && node.childrens.length>3)}" 
              *ngFor="let subnode of node.childrens">
            <div class="content">
              <ul  class="menu-content-cols">
                <li *ngIf="(subnode.text && subnode.text.length>0)" class="menu-links-header"  (click)="menuClick(subnode)">
                  <i *ngIf="subnode.icon" [ngClass]="subnode.icon" aria-hidden="true"></i>&nbsp;&nbsp;{{subnode.text}}
                </li>
                <li *ngIf="subnode.image">
                  <img  [attr.src]="subnode.image">
                </li>
                <li *ngFor="let subinnernode of subnode.childrens" class="menulinks"  (click)="menuClick(subinnernode)">
                  <div *ngIf="subinnernode.image" >
                    <img [attr.src]="subinnernode.image">
                  </div>
                  <i *ngIf="subinnernode.icon" class="fa fa-ravelry" aria-hidden="true"></i>&nbsp;&nbsp;{{subinnernode.text}}{{subinnernode.template}}
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </ng-container>

    <ng-container  *ngIf="(node.childrens && !node.childrens[0].childrens)" >
      <div class="menu-content" [ngClass]="{'menu-content-display':node.expand}">
        <ul class="menu-content-cols">
          <li class="col-menu-nodes col-menu-nodes-fixed">
            <div class="content">
              <ul  class="menu-content-cols">
                <li *ngFor="let subnode of node.childrens" class="menulinks" (click)="menuClick(subnode)">
                  <img *ngIf="subnode.image" [attr.src]="subnode.image">
                  <i *ngIf="subnode.icon" class="fa fa-ravelry" aria-hidden="true"></i>&nbsp;&nbsp;{{subnode.text}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </ng-container>


  `
})
export class MenuBarNodeComponent implements  OnInit{


  @Input() node : any;

  @Output()
  nodeclick: any = new EventEmitter<any>();

  expand : boolean;

  constructor(){
    this.expand = false;
  }



  ngOnInit(){
    this.node.expand = false;
  }


  onNodeClick(node:any){
    let data = {node:node, header:true};
    this.nodeclick.emit(data);
    this.handleClick(node);
  }

  menuClick(node:any){
    let data = {node:node, header:false};
    this.nodeclick.emit(data);
    this.handleClick(node);
  }

  private handleClick(node:any){

    this.expand = !this.expand;
    node.expand = !node.expand;

  }
}



