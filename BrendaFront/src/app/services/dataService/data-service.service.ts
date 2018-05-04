import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {}
  
  removeProject(id:number) {    
    return this.http.get('http://127.0.0.1:8080/remove?id='+id);
  }
  createProject(name:string, description :string, deadline : string) {        
     return this.http.get('http://127.0.0.1:8080/create?name='+name+'&desc='+description+'&deadline='+deadline);
  }
  updateProject(id:number, name: string, desc:string, deadline: string) {    
    return this.http.get('http://127.0.0.1:8080/update?id=' + id + '&name='+name+'&desc='+ desc +'&deadline='+deadline);
  }
  searchAProject(word: string, minIndex : number, maxIndex: number) {     
    return this.http.get('http://127.0.0.1:8080/search?word='+ word+'&minIndex='+minIndex+'&maxIndex='+maxIndex).map(res => res.json());
  }
    getRatio() {     
    return this.http.get('http://127.0.0.1:8080/getRatio').map(res => res.json() );
  }
}
