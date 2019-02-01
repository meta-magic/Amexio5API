
import { Component, OnInit, Input} from '@angular/core';
import {RestCallService} from '../../apimetadata/services/restcall.service';
import {ComDataInterface} from '../../apimetadata/models/component.structure';
@Component({
  selector: 'amexio-api-structure',
  templateUrl: 'amexiostructure.component.html',
})

export class AmexioStructureComponent implements OnInit {

  @Input('url') url: string;

  @Input('custom-com-data') customComData: ComDataInterface;

  comData: ComDataInterface;

  constructor(private _rCService: RestCallService) {}

  ngOnInit() {
    if (this.url) {
      this.getComponentData();
    }
  }

  getComponentData() {
    this._rCService.getCall(this.url).subscribe(
      (res: ComDataInterface) => {
        if (this.customComData) {
          this.addCustomData(res);
        } else {
          this.comData = res;
        }
      });
  }

  addCustomData(response: ComDataInterface) {
    if (this.customComData.title) {
      response.title = this.customComData.title;
    }
    if (this.customComData.description) {
      response.description = this.customComData.description;
    }
    if (this.customComData.sourceMetadata) {
      response.sourceMetadata = this.customComData.sourceMetadata;
    }
    if (this.customComData.liveMetadata) {
      response.liveMetadata = this.customComData.liveMetadata;
    }
    this.comData = response;
  }
}


