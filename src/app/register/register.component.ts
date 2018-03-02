import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  chooseBaby: boolean = false;
  chooseSitter: boolean = false;


  constructor(private data: DataService) { }

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
