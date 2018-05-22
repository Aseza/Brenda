import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Project } from '../../models/Project';
import { envCons } from '../environement';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  removeProject(id: number) {
    return this.http.delete(envCons.BACK_URL + 'remove' + '?id=' + id );
  }
  createProject(name: string, description: string, deadline: string) {
     return this.http.post(envCons.BACK_URL + 'create' , new Project(name, description, deadline));
  }
  updateProject(id: number, name: string, desc: string, deadline: string) {
     return this.http.put(envCons.BACK_URL + 'update' , new Project(name, desc, deadline, id));
  }
  searchAProject(word: string, minIndex: number, maxIndex: number) {
    return this.http.get(envCons.BACK_URL
      + 'search?word=' + word + '&minIndex=' + minIndex + '&maxIndex=' + maxIndex);
  }
  getRation() {
    return this.http.get(envCons.BACK_URL + 'ration');
  }
  getRatios() {
    return this.http.get(envCons.BACK_URL + 'ratios');
  }

}
