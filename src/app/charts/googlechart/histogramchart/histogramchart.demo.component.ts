/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'histogram-chart-demo',
  templateUrl: './histogramchart.demo.component.html',
})
export class HistogramChartDemoComponent implements OnInit {
  histogramChartData: any;
  htmlCode: string;
  typeScriptCode: string;
  dataSourceCode: string;
  copyMsgArray: any[];

  constructor(private http: HttpClient) {
    this.histogramChartData = [['Dinosaur', 'Length'], ['Acrocanthosaurus (top-spined lizard)', 12.2], ['Albertosaurus (Alberta lizard)', 9.1], ['Allosaurus (other lizard)', 12.2], ['Apatosaurus (deceptive lizard)', 22.9], ['Archaeopteryx (ancient wing)', 0.9], ['Argentinosaurus (Argentina lizard)', 36.6], ['Baryonyx (heavy claws)', 9.1], ['Brachiosaurus (arm lizard)', 30.5], ['Ceratosaurus (horned lizard)', 6.1], ['Coelophysis (hollow form)', 2.7], ['Compsognathus (elegant jaw)', 0.9], ['Deinonychus (terrible claw)', 2.7], ['Diplodocus (double beam)', 27.1], ['Dromicelomimus (emu mimic)', 3.4], ['Gallimimus (fowl mimic)', 5.5], ['Mamenchisaurus (Mamenchi lizard)', 21.0], ['Megalosaurus (big lizard)', 7.9], ['Microvenator (small hunter)', 1.2], ['Ornithomimus (bird mimic)', 4.6], ['Oviraptor (egg robber)', 1.5], ['Plateosaurus (flat lizard)', 7.9], ['Sauronithoides (narrow-clawed lizard)', 2.0], ['Seismosaurus (tremor lizard)', 45.7], ['Spinosaurus (spiny lizard)', 12.2], ['Supersaurus (super lizard)', 30.5], ['Tyrannosaurus (tyrant lizard)', 15.2], ['Ultrasaurus (ultra lizard)', 30.5], ['Velociraptor (swift robber)', 1.8]];

    this.getHtmlAndTypeScriptCode();
  }

  //TO LOAD HTML AND TYPESCRIPT CODE
  getHtmlAndTypeScriptCode() {
    let responseHtml: any;
    let responseTs: any;

    //HTML FILE
    this.http.get('assets/data/code/charts/histogramchart/chart.html',{responseType: 'text'}).subscribe(data => {
      responseHtml = data;
    }, error => {
    }, () => {
      this.htmlCode = responseHtml;
    });

    //TS FILE
    this.http.get('assets/data/code/charts/histogramchart/chart.text',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.typeScriptCode = responseTs;
    });
    //DataSource FILE
    this.http.get('assets/data/code/charts/histogramchart/datasource.json',{responseType: 'text'}).subscribe(data => {
      responseTs = data;
    }, error => {
    }, () => {
      this.dataSourceCode = responseTs;
    });
  }

  //this code use copy to html code from tabpanel
  onCopyClick() {
    if (this.copyMsgArray.length >= 1) {
      this.copyMsgArray = [];
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    } else {
      this.copyMsgArray.push({'msg': 'Code Copied', 'type': 'info'});
    }
  }

  ngOnInit() {
  }

}


