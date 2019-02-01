/**
 * Created by dattaram on 1/2/19.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class RestCallService {

  constructor(private _httpClient: HttpClient) {
  }

  getCall(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
}
