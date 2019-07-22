import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public person:PersonService) {
    person.update.subscribe(()=>{
      this.update();
    })
  }

  ngOnInit() {
  }

  fname:string;
  lname:string;
  age:number;

  update(){
    this.fname = this.person.first_name;
    this.lname  = this.person.last_name;
    this.age = this.person.age;
  }
}
