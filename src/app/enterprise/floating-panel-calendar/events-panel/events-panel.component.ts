import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-panel',
  templateUrl: './events-panel.component.html'
})
export class EventsPanelComponent implements OnInit {

  constructor() { }

  eventData: any = [];
  showPanel: boolean;
  ngOnInit() {
    this.showPanel = true;
  }

}
