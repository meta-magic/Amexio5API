import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'amexio-d3-chart-line-demo',
  templateUrl: './d3linechart.demo.component.html'
})
export class AmexioD3LineChartDemoComponent implements OnInit {
  userDataSourceCode: string;
  userDefineColors: any;
  doubleLineData: any;
  userDefineColorData: any;
  sourceData: any;
  userDataSource: any;
  singlelinedata: any;

  constructor() {
  }


  ngOnInit() {
   this.singlelinedata = [[{"datatype":"number","label":"Day"},{"datatype":"number","label":"CNX Resources Corp"}],[0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],[9,40],[10,32],[11,35],[12,30],[13,40],[14,42],[15,47],[16,44],[17,48],[18,52],[19,54],[20,42],[21,55],[22,56],[23,57],[24,60],[25,50],[26,52],[27,51],[28,49]]
  
    this.doubleLineData =[[{"datatype":"number","label":"Day"},{"datatype":"number","label":"XYZ"},{"datatype":"number","label":"PQR"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19],[8,33,25],[9,40,32],[10,32,24],[11,35,27],[12,30,22],[13,40,32],[14,42,34],[15,47,39]]
  
  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

  }
  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }
}