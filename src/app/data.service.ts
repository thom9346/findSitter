import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

//@injectable means that you can use dependency injection
@Injectable()
export class DataService {

  private babies: Baby[] = [
    {firstname: 'Oliver', postalCode:'2920', 
    picture: 'nope', age: 8, gender: 'Male' },

    {firstname: 'Carla', postalCode:'2650', 
    picture: 'NEIN', age: 24, gender: 'Female' }
  
  ];

  private sitters: Sitter[] = [
    {firstname: 'Rick', lastname: 'alice',
    age: 82, yearsOfExperience: 4,
    region: 'Hvidovre', gender: 'female',
    phone: '292922929'},

    {firstname: 'Morty', lastname: 'alice',
    age: 22, yearsOfExperience: 0,
    region: 'Hvidovre', gender: 'female',
    phone: '292922929', picture: 'nope'}
  ];

  constructor() { }

  addBaby(baby: Baby) {
    this.babies.push(baby);
    console.log(this.babies);
  }

  addSitter(sitter: Sitter) {
    this.sitters.push(sitter);
    console.log(this.sitters);
  }

  get showSitters(){
    return this.sitters;
  }

  get showBabies(){
    return this.babies;
  }
}
