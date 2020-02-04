import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class HTTPService {

    constructor(private http: HttpClient) {

    }

    fetch(serviceUrl: string, methodType: string): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, { headers });
        } else if (methodType === 'get') {
            return this.http.get(serviceUrl , { headers });
        }
    }


    post(serviceUrl: string, methodType: string, requestJson: any): Observable<any> {
        const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
        if (methodType === 'post') {
            return this.http.post(serviceUrl, requestJson, { headers });
        } else if (methodType === 'get') {
            return this.http.get(serviceUrl, { headers });
        }
    }
}
