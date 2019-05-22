import { Injectable } from '@angular/core';
import {Route, PreloadingStrategy} from '@angular/router';
import { Observable } from 'rxjs';
import { timer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay) => delay
            ? timer(150).pipe(mergeMap(_ => load()))
            : load();
        return route.data && route.data.preload 
            ? loadRoute(route.data.delay)
            : of(null);
      }
}