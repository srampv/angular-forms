import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  Counter = 0;
  products=[];
   profileForm = new FormGroup({
     url: new FormControl(''),
     desc: new FormControl(''),
     isChecked: new FormControl('')
    });
  constructor() { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  updateName() {
    this.profileForm.setValue({url: 'venkata', desc: 'pilaka'});
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.valueChange.emit(this.getProducts());
  }
  getProducts() {
    return [{'url' : 'https://howtodoinjava.com', "id": 1} , {"url" : 'https://tutorialspoint.com' , "id" : 2},
    {"url" : 'https://www.google.com' , "id" : 3} , { "url" : 'https://www.test.com' , "id" : 4 }]
  }
  doMe(event: any) {
    console.log(event.url);
  }
}
