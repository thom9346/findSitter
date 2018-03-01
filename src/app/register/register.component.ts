import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  chooseBaby: boolean = false;
  chooseSitter: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onClickBaby() {
    this.chooseSitter = false;
    this.chooseBaby = true;
  }

  onClickSitter() {
    this.chooseBaby = false;
    this.chooseSitter = true;
  }

}
