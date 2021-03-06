/**
 * Created by sagar on 11/1/18.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gantt-chart-demo',
  templateUrl: './ganttchart.demo.component.html',
})
export class GanttChartDemoComponent implements OnInit {
  ganttChartData:any;
  ganttChartWithNoDepData:any;
  ganttChartWithGropResources:any;
  constructor() {
    this.ganttChartData=[
      [{"datatype":'string',"label": 'Task ID'},{"datatype":'string',"label":  'Task Name'},{"datatype":'string', "label": 'Resource'},{"datatype":'date',"label":  'Start'},{"datatype":'date',"label":  'End'},{"datatype":'number',"label":  'Duration'},{"datatype":'number', "label": 'Percent Complete'},{"datatype":'string', "label": 'Dependencies'}],
            ['toTrain', 'Walk to train stop', 'walk', null, null, this.toMilliseconds(5), 100, null],
            ['music', 'Listen to music', 'music', null, null, this.toMilliseconds(70), 100, null],
            ['wait', 'Wait for train', 'wait', null, null, this.toMilliseconds(10), 100, 'toTrain'],
            ['train', 'Train ride', 'train', null, null, this.toMilliseconds(45), 75, 'wait'],
            ['toWork', 'Walk to work', 'walk', null, null, this.toMilliseconds(10), 0, 'train'],
            ['work', 'Sit down at desk', null, null, null, this.toMilliseconds(2), 0, 'toWork']
    ];
    this.ganttChartWithNoDepData=[
      [{"datatype":'string',"label": 'Task ID'},{"datatype":'string',"label":  'Task Name'},
      {"datatype":'string', "label": 'Resource'},{"datatype":'date',"label":  'Start'},
      {"datatype":'date',"label":  'End'},{"datatype":'number',"label":  'Duration'},
      {"datatype":'number', "label": 'Percent Complete'},
      {"datatype":'string', "label": 'Dependencies'}],
      ['2014Spring', 'Spring 2014', 'spring',
       new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
      ['2014Summer', 'Summer 2014', 'summer',
       new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
      ['2014Autumn', 'Autumn 2014', 'autumn',
       new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
      ['2014Winter', 'Winter 2014', 'winter',
       new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
      ['2015Spring', 'Spring 2015', 'spring',
       new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
      ['2015Summer', 'Summer 2015', 'summer',
       new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
      ['2015Autumn', 'Autumn 2015', 'autumn',
       new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
      ['2015Winter', 'Winter 2015', 'winter',
       new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
      ['Football', 'Football Season', 'sports',
       new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
      ['Baseball', 'Baseball Season', 'sports',
       new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
      ['Basketball', 'Basketball Season', 'sports',
       new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
      ['Hockey', 'Hockey Season', 'sports',
       new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
    ];
    this.ganttChartWithGropResources=[
      [{"datatype":'string',"label": 'Task ID'},
      {"datatype":'string',"label":  'Task Name'},
      {"datatype":'string', "label": 'Resource'},
      {"datatype":'date',"label":  'Start'},
      {"datatype":'date',"label":  'End'},
      {"datatype":'number',"label":  'Duration'},
      {"datatype":'number', "label": 'Percent Complete'},
      {"datatype":'string', "label": 'Dependencies'}],
        ['Research', 'Find sources', null,
         new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper', 'write',
         null, new Date(2015, 0, 9), this.toMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Create bibliography', 'write',
         null, new Date(2015, 0, 7), this.toMilliseconds(1), 20, 'Research'],
        ['Complete', 'Hand in paper', 'complete',
         null, new Date(2015, 0, 10), this.toMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Outline paper', 'write',
         null, new Date(2015, 0, 6), this.toMilliseconds(1), 100, 'Research']

    ];
  }
  toMilliseconds(days:number){
    return days * 24 * 60 * 60 * 1000;
  }
  ngOnInit() {
  }

}


