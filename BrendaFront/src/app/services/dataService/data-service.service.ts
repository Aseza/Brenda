import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Project } from '../../models/Project';

@Injectable()
export class DataService {

  constructor(public http: Http) {}

  removeProject(id: number) {
    return this.http.delete('http://127.0.0.1:8080/remove?id=' + id);
  }
  createProject(name: string, description: string, deadline: string) {
     return this.http.post('http://127.0.0.1:8080/create' , new Project(name, description, deadline));
  }
  updateProject(id: number, name: string, desc: string, deadline: string) {
     return this.http.put('http://127.0.0.1:8080/update' , new Project(name, desc, deadline, id));
  }
  searchAProject(word: string, minIndex: number, maxIndex: number) {
    return this.http.get('http://127.0.0.1:8080/search?word='
    + word + '&minIndex=' + minIndex + '&maxIndex=' + maxIndex).map(res => res.json());
  }
    getRatio() {
    return this.http.get('http://127.0.0.1:8080/ratio').map(res => res.json() );
  }
}
