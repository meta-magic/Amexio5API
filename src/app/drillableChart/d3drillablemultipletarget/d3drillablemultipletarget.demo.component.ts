import { Component, OnInit} from '@angular/core';
import {ComponentDataStructure} from "../../apimetadata/models/component.structure";

@Component({
  selector: 'drillable-with-multiple-target-demo',
  templateUrl: './d3drillablemultipletarget.demo.component.html'
})
export class AmexioD3DrillableMultipleTargetDemoComponent implements OnInit {
  drillabledata:any;
  barchartcolor: any;
  customSourceData: ComponentDataStructure;
  constructor() {
    this.customSourceData = new ComponentDataStructure();
  }
  ngOnInit(): void {

    this.createCustomSourceData();

     this.drillabledata=["label","value","name"];

     this.barchartcolor =
      [
        "#4040a1",
        "#e06377",
        "#7e4a35",
        "#6b5b95",
        "#feb236",
        "#d64161",
        "#ff7b25"
      ];
  }
 
  createCustomSourceData() {
    this.customSourceData.title = 'D3-Drillable Chart With Multiple Target.';
    this.customSourceData.description = 'An D3 Drill down charts allow users to focus in on the "data within the data" or allow user to navigate through a number of charts having multiple targets';
    this.customSourceData.sourceMetadata.htmlUrl = 'charts/D3Charts/d3drillablechart/d3chart.html';
    this.customSourceData.sourceMetadata.tsUrl = 'charts/D3Charts/d3drillablechart/d3chart.text';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-d3-chart-multiple-drillable?embed=1&file=src/app/d3chart/d3drillablechart/d3drillablechart.demo.component.html&view=editor';
  }
}
