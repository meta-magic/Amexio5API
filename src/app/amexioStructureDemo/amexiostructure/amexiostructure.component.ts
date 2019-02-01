
import { Component, OnInit, Input} from '@angular/core';
import {RestCallService} from '../../services/restcall.service';
@Component({
  selector: 'amexio-api-structure',
  templateUrl: 'amexiostructure.component.html',
})

export class AmexioStructureComponent implements OnInit {

  @Input('title') title: string;

  @Input('description') description: string;

  @Input('url') url: string;

  comData: any;

  constructor(private _rCService: RestCallService) {


  }
  ngOnInit() {
    if (this.url) {
      this.getComponentData();
    }
  }

  getComponentData() {
    this._rCService.getCall(this.url).subscribe(
      (res: any) => {
        this.comData = res;
      });
  }
}
