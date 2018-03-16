import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Sitter } from '../entities/sitter';
import { Baby } from '../entities/baby';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  


  private sitters : Sitter[];
  private babies : Baby[];
  constructor(private data: DataService) { }

  showAllSitters(){
    this.sitters = this.data.showSitters;
    console.log(this.data.showSitters);
  
  };

  showAllBabies(){
    this.babies = this.data.showBabies;

  }
  
  ngOnInit() {
    console.log("TEST");
    this.showAllBabies();
    this.showAllSitters();
  };

  onBabyClicked(baby){
   console.log(baby);
  }



 


}
