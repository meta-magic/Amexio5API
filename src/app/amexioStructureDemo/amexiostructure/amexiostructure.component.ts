
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RestCallService } from '../../apimetadata/services/restcall.service';
import { ComponentDataStructure } from '../../apimetadata/models/component.structure';
@Component({
  selector: 'amexio-api-structure',
  templateUrl: 'amexiostructure.component.html',
})

export class AmexioStructureComponent implements OnInit {

  @Input('url') url: string;

  @Input('custom-com-data') customComData: ComponentDataStructure;

  comData: ComponentDataStructure;

  disabledFlag: boolean;

  @ViewChild('tab') tabRef: any;

  constructor(private _rCService: RestCallService) {

  }

  ngOnInit() {
    if (this.url) {
      this.getComponentData();
    } else {
      this.addCustomData(this.customComData);
    }
  }

  getComponentData() {
    this._rCService.getCall(this.url).subscribe(
      (res: ComponentDataStructure) => {
        if (this.customComData) {
          this.addCustomData(res);
        } else {
          this.comData = res;
          this.accessibilityCheck(this.comData);
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
    if (this.customComData.apiaccessibledata && this.customComData.apiaccessibledata.length > 0) {
      response.apiaccessibledata = this.customComData.apiaccessibledata;
    }
    if (this.customComData.componentDescription) {
      response.componentDescription = this.customComData.componentDescription;
    }
    if (this.customComData.compFeaturesTitle) {
      response.compFeaturesTitle = this.customComData.compFeaturesTitle;
    }
    if (this.customComData.keyFeatures) {
      response.keyFeatures = this.customComData.keyFeatures;
    }

    this.comData = response;
    this.accessibilityCheck(this.comData);
  }

  accessibilityCheck(data: any) {
    if (data && data.hasOwnProperty('isAccessibility') && data.isAccessibility === false) {
      this.tabRef.disableTab(2);
    }
    if (data && data.liveMetadata.disabled && data.liveMetadata.disabled === true) {
      this.tabRef.disableTab(4);
    }
  }
}


