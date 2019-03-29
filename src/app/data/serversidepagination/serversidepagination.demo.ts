/**
 * Created by dattaram on 15/2/19.
 */


import {Component, OnInit} from '@angular/core';
import {ComponentDataStructure} from '../../apimetadata/models/component.structure';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'server-side-pagination-demo',
  templateUrl : './serversidepagination.demo.html',
})
export class ServerSidePaginationDemo implements OnInit {
  countryData: any[] = [];
  totalDataCount = 239;
  showLoader = false;
  customSourceData: ComponentDataStructure;
  constructor(private _httpClient: HttpClient) {
    this.customSourceData = new ComponentDataStructure();
  }

  ngOnInit(): void {
    this.createCustomSourceData();
    this.getData(0 , 10);
  }

  getData(startIndex: number, lastIndex: number) {
    this.showLoader = true;
    this._httpClient.get('https://restapi.amexio.org:8991/rest-sample-app/api/region/country/' + startIndex + '/' + lastIndex).subscribe(
      (res: any) => {
        this.countryData = res.response.data;
        this.showLoader = false;
      });
  }

  createCustomSourceData() {
    this.customSourceData.title = 'Grid- Lazy Loading';
    this.customSourceData.description = 'Data grid With lazy loading enabled for large data sets pagination, user can bring only require data and show. Based on total-count (attribute mapped) and initial datasize number of pages will be shown.';
    this.customSourceData.sourceMetadata.htmlUrl = 'data/serversidepagination/serversidepagination.html';
    this.customSourceData.sourceMetadata.tsUrl = 'data/serversidepagination/serversidepagination.text';
    this.customSourceData.sourceMetadata.datasourceUrl = 'assets/data/componentdata/country.json';
    this.customSourceData.liveMetadata.stackblitzUrl = 'https://stackblitz.com/edit/amexio-v4-grid-lazyloading?embed=1&file=app/grid/calendar/serverside.paging.component.html&view=editor';
  }


  loadPageData(pageInfo: any) {
    this.getData(pageInfo.next.startIndex - 1, (pageInfo.next.endIndex > this.totalDataCount) ? this.totalDataCount : pageInfo.next.endIndex );
  }
}


