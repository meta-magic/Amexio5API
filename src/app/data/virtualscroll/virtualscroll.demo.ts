
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'virtualscroll-demo',
  templateUrl: './virtualscroll.demo.html'
})
export class AmexioVirtualScrollDemo {
  copyMsgArray: any[];
  numbers: number[] = [];
  localData: any;
  localData2d: any;
  carouselData: any;
  carouselImageData: any;
  constructor(private http: HttpClient) {
    this.carouselImageData = [
      {
        "title": "Niagara Falls",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_ChasingHappiness/e0f5e0d4-d36c-46ab-8afc-c66c6facf656._UR3000,600_SX3000_FMjpg_.jpg",
        "active": true
      },
      {
        "title": "Happy Child ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_VinciDa/318c91ec-5551-48e6-acd5-c75f17a9d89d._UR3000,600_SX3000_FMjpg_.jpg",
        "active": false
      },
      {
        "title": "Arches  ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_VellaiPookal/33ba0686-2ba6-40d2-987a-3b510f5adc15._UR3000,600_SX3000_FMjpg_.jpg\n",
        "active": false
      },
      {
        "title": "Peace Amid",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_Lucifer_MalayalamTamilTelugu/94a4a4b8-4022-4dc7-916d-93fe07022bda._UR3000,600_SX3000_FMjpg_.jpg",
        "active": false
      },
      {
        "title": "Vestrahorn  ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_yong_sheldon_season2/f8bb3275-9b19-40ea-a61c-4e50726715b1._UR3000,600_SX3000_FMjpg_.jpg\n",
        "active": false
      },
      {
        "title": "Rainy infinite  ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_2_0_TamilTeluguHindi/3870c79a-1b44-44e8-8443-62830a383a92._UR3000,600_SX3000_FMjpg_.jpg",
        "active": false
      },
      {
        "title": "Eye to Eye ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Arjun_reddy_updated/e18db314-6a75-435a-939f-b8042f8b3f8b._UR3000,600_SX3000_FMjpg_.jpg\n",
        "active": false
      },
      {
        "title": "Magical dawn",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_FMSPshowlaunch/2bd396d3-c5b8-407a-bb4f-f5eb1419c9b9._UR3000,600_SX3000_FMjpg_.jpg\n\n",
        "active": false
      },
      {
        "title": "Mother  D’Auria ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_MissionImpossibleFallout/fd7a5baa-3516-4fa5-804f-563874c2f7ff._UR3000,600_SX3000_FMjpg_.jpg",
        "active": false
      },
      {
        "title": "Nikon ",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_PV_IN_GoodOmens/88b43aec-5aa8-406b-8a97-e738eac6903b._UR3000,600_SX3000_FMjpg_.jpg\n",
        "active": false
      },
      {
        "title": "Ala-Archa Dros",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_TumhariSullu/700664ec-553f-4fa0-90b7-f831db8eb1f3._UR3000,600_SX3000_FMjpg_.jpg\n",
        "active": false
      },
      {
        "title": "Dramatic",
        "imagepath": "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_2andhalfmen_v1/efa21f30-ca41-4819-8679-04081d7dd3b9._UR3000,600_SX3000_FMjpg_.jpg",
        "active": false
      }
    ];
    http.get('assets/data/componentdata/virtualscroller.json')
      .subscribe((response: any) => {
        this.localData = response;
      });
    http.get('assets/data/componentdata/virtualscroller2d.json')
      .subscribe((response: any) => {
        this.localData2d = response;
      });
    http.get('assets/data/componentdata/virtualscrollercarousel.json')
      .subscribe((response: any) => {
        this.carouselData = response;
      });
  }


  // THIS METHOD USED FOR COPY THE HTML & TYPESCRIPT CODE
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    } else {
      this.copyMsgArray.push({ 'msg': 'Code Copied', 'type': 'info' });
    }
  }

  getTransitionOrigin(index: number) {
    if (index == 0) {
      return 'left center';
    }
    if (index == 3) {
      return 'right center';
    }
    if ((index == 1) || (index == 2)) {
      return 'center center';
    }
  }

}





