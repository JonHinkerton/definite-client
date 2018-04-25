import { Component, OnInit } from '@angular/core';
import { Roll } from '../roll';
import { Shapes } from '../roll';

@Component({
  selector: 'app-roller',
  templateUrl: './roller.component.html',
  styleUrls: ['./roller.component.css']
})
export class RollerComponent implements OnInit {

  shapes: Shapes[] = [
      {value: 4},{value: 6},{value: 8},{value: 10},{value: 12},{value: 20}
  ]

  constructor() { }

  ngOnInit() {

  }

  getRoll(): void {

  }

}
