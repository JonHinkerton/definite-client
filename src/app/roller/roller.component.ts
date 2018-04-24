import { Component, OnInit } from '@angular/core';
import { Roll } from '../roll';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.css']
})
export class RollerComponent implements OnInit {

  roll: Roll[];

  constructor() { }

  ngOnInit() {
    
  }

  getRoll(): void {

  }

}
