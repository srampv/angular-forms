import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'URL Form';
 
    ngOnInit() {
 
    }

  displayCounter(count) {
       console.log(count)
  }
  
}
