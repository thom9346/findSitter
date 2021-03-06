import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Sitter } from '../entities/sitter';
import { DataService } from '../data.service';

@Component({
  selector: 'app-baby-sitter',
  templateUrl: './baby-sitter.component.html',
  styleUrls: ['./baby-sitter.component.scss']
})
export class BabySitterComponent implements OnInit {
private babysitterForm: FormGroup;
  

  model = new Sitter('','',null, null ,'','','','http://');

  constructor(private fb: FormBuilder, private data: DataService) { }
  //private fb: FormBuilder
 // ageControl = this.fb.group({
   // miniAge: ['', Validators.min(16)]
 // });


 createForm(){
  this.babysitterForm = this.fb.group({
    age: ['', Validators.min(16)]
  });
 }


  ngOnInit() {
    this.createForm();
  }

  get currentSitter() {
    return JSON.stringify(this.model); 
  }

  onSubmit(babysitterForm) {
    this.data.addSitter(this.model); //recieve value from registre form
    console.log(this.model);
  }

 

}
