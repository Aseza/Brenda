import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Injectable()
export class WebSocketService {
   observer: Observer<string>;
  observable: Observable<string> ;
  constructor() {
    this.observer = {
      next(value) {console.log('value is ' + value); },
      error() {console.log('error'); },
      complete() {console.log('complete');
      }
   };
    this.observable = new Observable<string>(obs => {obs.next('NEXTO'); });
    this.observable.subscribe(this.observer);
   }

}
