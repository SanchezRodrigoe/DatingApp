import { HttpClient } from '@angular/common/http';
import { AbstractType, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get
  }
}
