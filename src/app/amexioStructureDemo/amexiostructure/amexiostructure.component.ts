
import { Component, OnInit, Input} from '@angular/core';
import {RestCallService} from '../../apimetadata/services/restcall.service';
import {ComponentDataStructure} from '../../apimetadata/models/component.structure';
@Component({
  selector: 'amexio-api-structure',
  templateUrl: 'amexiostructure.component.html',
})

export class AmexioStructureComponent implements OnInit {

  @Input('url') url: string;

  @Input('custom-com-data') customComData: ComponentDataStructure;

  comData: ComponentDataStructure;

  title = '';
  description = '';

  constructor(private _rCService: RestCallService) {
    this.comData = new ComponentDataStructure;
  }

  ngOnInit() {
    if (this.url) {
      this.getComponentData();
    } else {
      this.addCustomData(this.customComData);
    }
    this.title = this.comData.title;
    this.description =  this.comData.description;
  }

  getComponentData() {
    this._rCService.getCall(this.url).subscribe(
      (res: ComponentDataStructure) => {
        if (this.customComData) {
          this.addCustomData(res);
        } else {
          this.comData = res;
        }
      });
  }

  addCustomData(response: ComponentDataStructure) {
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


