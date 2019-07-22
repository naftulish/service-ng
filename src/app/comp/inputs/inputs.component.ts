import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor(public person:PersonService) { }

  ngOnInit() {
  }
  
  setFirstName(e){
    this.person.first_name = e;
    this.person.update.emit();
  }

  setLastName(e){
    this.person.last_name = e;
    this.person.update.emit();
  }

  setAge(e){
    this.person.age = e;
    this.person.update.emit();
  }
}
