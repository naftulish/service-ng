import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  first_name:string;
  last_name:string;
  age:number;

  update = new EventEmitter();

  constructor() { }


}
