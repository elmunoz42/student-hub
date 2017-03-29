import { Component, OnInit } from '@angular/core';
import { GetTriviaService } from './get-trivia.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  trivia = {};
  title = 'Welcome to the Student Hub!';
  constructor(private _getT: GetTriviaService ) {
  }
  ngOnInit(){
    this._getT.getTrivia().subscribe(data => this.trivia = data);
    console.log(this.trivia);
  }

}
