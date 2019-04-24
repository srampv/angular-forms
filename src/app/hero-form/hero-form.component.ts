import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from 'protractor';
import { Observable, config } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
  providers: [ConfigService]
})
export class HeroFormComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  Counter = 0;
  products=[];
  configUrl = 'assets/config.json';
   profileForm = new FormGroup({
     url: new FormControl(''),
     desc: new FormControl(''),
     isChecked: new FormControl('')
    });
  constructor(public configService: ConfigService) {}

  ngOnInit() {
    this.products = this.getProducts();
  }

  updateName() {
    this.profileForm.setValue({url: 'venkata', id: 'pilaka',isChecked: false});
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // for (var i in this.profileForm) {
    //   console.log(i+":"+this.profileForm[i])
    // }
    console.log(this.profileForm.value.key);
    this.showConfigResponse();
    this.valueChange.emit(this.getProducts());
  }
 
  getProducts() {
    document.querySelectorAll(this.profileForm.value.key);
    return [{'url' : 'https://howtodoinjava.com', '"id': 1, isChecked : false} ,
            {'url' : 'https://tutorialspoint.com' , 'id' : 2 , isChecked : false},
            {'url' : 'https://www.google.com' , 'id' : 3, isChecked : false} ,
             { 'url' : 'https://www.test.com' , 'id' : 4, isChecked : false }];
  }
  doMe(event: any) {
    console.log(event.url);
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
         keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        console.log(resp.body);
      });
  }
}
