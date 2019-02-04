import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'drillable-with-multiple-target-demo',
  templateUrl: './d3drillablemultipletarget.demo.component.html'
})
export class AmexioD3DrillableMultipleTargetDemoComponent implements OnInit {
  drillabledata:any;
  barchartcolor: any;
  constructor() {}
  ngOnInit() {
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



}
