/**
 * Created by Ankita on 27/5/19.
 */

import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { ComponentDataStructure } from '../../apimetadata/models/component.structure';
import { Router } from "@angular/router";
@Component({
  selector: 'ribbon-card-demo',
  templateUrl: './ribbon.demo.html'
})
export class RibbonCardDemo implements OnInit {

  copyMsgArray: any[];
  flag: boolean;
  cardData: any[] = [];
  customSourceData: ComponentDataStructure;


  constructor(private http: HttpClient, public router: Router) {
    this.customSourceData = new ComponentDataStructure();

    this.flag = true;
    this.cardData = [

      {
        "cardheader": "Free Plan",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact",
        "price": "Free",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "buy",
        "popularity": ""
      },
      {
        "cardheader": " Bronze Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact",
        "price": "3000",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "buy",
        "popularity": ""
      },
      {
        "cardheader": "Silver Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact",
        "price": "6000",
        "colorpalette":"classic",
        "styletype": "ribbon-style",
        "buttonlabel": "buy",
        "popularity": "Most Popular"
      },
      {
        "cardheader": "Gold Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact",
        "price": "8500",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "buy",
        "popularity": ""
      }

    ]

  }

  ngOnInit(): void {
  }


  //THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

}


