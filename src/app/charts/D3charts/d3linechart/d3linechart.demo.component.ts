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
  userDataSource3: any;
  userDataSource4: any;
  userDataSource5: any;
  userDataSource6: any;

  singlelinedata: any;
  lineData: any;
  climateData: any;
  dailystatData: any;
  stockData: any;
  dailyStatLinecolor = ["#004d4d"];
  climateDataLineColor = ["#b30059"]; 
  stockLineColor = ["#004080"];
  constructor() {
    this.singlelinedata = [[{"datatype":"number","label":"Day"},{"datatype":"number","label":"CNX Resources Corp"}],[0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],[9,40],[10,32],[11,35],[12,30],[13,40],[14,42],[15,47],[16,44],[17,48],[18,52],[19,54],[20,42],[21,55],[22,56],[23,57],[24,60],[25,50],[26,52],[27,51],[28,49]]
  
    this.doubleLineData =[[{"datatype":"number","label":"Day"},{"datatype":"number","label":"XYZ"},{"datatype":"number","label":"PQR"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19],[8,33,25],[9,40,32],[10,32,24],[11,35,27],[12,30,22],[13,40,32],[14,42,34],[15,47,39]]
   
    this.lineData = [[{"datatype":"number","label":"Day"},{"datatype":"number","label":"Sales"},{"datatype":"number","label":"Profit"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10]];
  
    this.climateData = [[{"datatype":"number","label":"Day"},
    {"datatype":"number","label":"Temperature"}],
    [0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],
    [9,40],[10,32],[11,35],[12,30],[13,40],[14,42],[15,47],[16,44],[17,48],
    [18,52],[19,54],[20,42],[21,55],[22,56],[23,57],[24,60],[25,50],[26,52],
    [27,51],[28,49],
    [29,10],[30,16],[31,20],[32,15],[33,28],[34,9],[35,19],[36,20],[37,22],
    [38,23],[39,24],[40,25],[41,20],[42,30],[43,32],[44,22],[45,34],[46,28],
    [47,36],[48,38],[49,42],[50,40],[51,44],[52,46],[53,44],[54,48],[55,52],
    [56,55],[57,59]
  
  ];

  this.dailystatData = [
    [{"datatype":"number","label":"Day"},
     {"datatype":"number","label":"Working Hours"},
     {"datatype": "string", "label": "Weekday"}
   ],
  [0 ,0, 'Sun'],[1 ,9, 'Mon'],[2 ,10, 'Tue'],[3 ,7,'Wed'],
  [4,12, 'Thu'],[5,10, 'Fri'],[6,14, 'Sat']
 
];

this.stockData  =  [[{"datatype":"number","label":"Day"},{"datatype":"number","label":"S&P Corp"}],
  [0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],
  [9,40],[10,32],[11,35],[12,30],[13,40],[14,42],[15,47],[16,44],[17,48],[18,52],
  [19,54],[20,42],[21,55],[22,56],[23,57],[24,60],[25,50],[26,52],[27,51],[28,49],

  [29,50],[30,20],[31,23],[32,17],[33,18],[34,9],[35,11],[36,27],[37,33],
  [38,40],[39,32],[40,35],[41,30],[42,40],[43,42],[44,47],[45,44],[46,48],[47,52],
  [48,54],[49,42],[50,55],[51,56],[52,57],[53,60],[54,50],[55,52],[56,51],[57,49]
   ];

  }

  ngOnInit() {
  }

  onDefaultLegendClick(event: any) {

    this.sourceData = event;

  }

  onUserDefineChartClick(event: any) {
    this.userDataSource = event; 
  }

  onUserDefineLegendClick(event: any) {

    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.sourceData = event;
  }

  onLineLegendClick(event: any) {
    this.userDataSource3 = event;
  }

  onLineChartClick(event: any) {
    this.userDataSource3 = event;
  }

  onLineChart4Click(event: any) {
    this.userDataSource4 = event;
  }

  onLineChart5Click(event: any) {
    this.userDataSource5 = event;
  }

  onLineChart6Click(event: any) {
    this.userDataSource6 = event;
  }

  onLineLegend4Click(event: any) {
    this.userDataSource4 = event;
  }

  onLineLegend5Click(event: any) {
    this.userDataSource5 = event;
  }

  onLineLegend6Click(event: any) {
    this.userDataSource6 = event;
  }
}