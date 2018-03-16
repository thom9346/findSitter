import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Baby } from '../../entities/baby';


@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent implements OnInit {

  @Input() babyInput: Baby;
  @Output() babyClicked : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }
  onBabyClick(){
    this.babyClicked.emit(this.babyInput);
  }

}
