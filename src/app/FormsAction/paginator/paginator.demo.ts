/**
 * Created by sagar on 9/1/18.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'paginator-demo',
  templateUrl :'./paginator.demo.html',
})
export class PaginatorDemo {
  currentPage: number = 1;
  constructor() {}

  loadPageData(pageInfo: any) {
   this.currentPage = pageInfo.pageNumber;
  }
}


