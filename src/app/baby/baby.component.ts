import { Component, OnInit, Input, Output } from '@angular/core';
import { Baby } from '../entities/baby';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.scss']
})
export class BabyComponent implements OnInit {

//  @Input() baby: Baby;
//  @Output() babyClicked: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
