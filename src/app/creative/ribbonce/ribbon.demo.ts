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
        "contact": "Contact Us",
        "price": "Free",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "Buy",
        "popularity": ""
      },
      {
        "cardheader": " Bronze Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact Us",
        "price": "$3000",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "Buy",
        "popularity": ""
      },
      {
        "cardheader": "Silver Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact Us",
        "price": "$6000",
        "colorpalette":"classic",
        "styletype": "ribbon-style",
        "buttonlabel": "Buy",
        "popularity": "Most Popular"
      },
      {
        "cardheader": "Gold Package",
        "path": "assets/images/logos/Amexio.webp",
        "contact": "Contact Us",
        "price": "$8500",
        "colorpalette":"",
        "styletype": "",
        "buttonlabel": "Buy",
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


