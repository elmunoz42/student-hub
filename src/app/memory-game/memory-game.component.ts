import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
class Card {

  status: boolean = false;
  constructor(public content: string, public imgUrl: string) { }

  getContent = function () {
    return this.content;
  };
  getPos = function () {
    return this.pos;
  };
  toggleStatus = function () {
    if (this.status===0) {
      this.status=1;
    }else {
      this.status=0;
    }
  };

}

var card1 = new Card("firstString", "http://www.learnandmaster.com/guitar-blog/wp-content/uploads/Notes-on-E-String.png");
var card2 = new Card("secondString", "http://www.learnandmaster.com/guitar-blog/wp-content/uploads/Notes-on-B-String.png");
var card3 = new Card("thirdString", "http://www.learnandmaster.com/guitar-blog/wp-content/uploads/Third-Sting-Notes.png");
var card4 = new Card("fourthString", "http://www.learnandmaster.com/guitar-blog/wp-content/uploads/Fourth-Sting-Notes.png");
var card5 = new Card("fifthString",
"http://www.learnandmaster.com/guitar-blog/wp-content/uploads/5th-String-Notes-300x214.png");
var card6 = new Card("sixthString",
"http://www.learnandmaster.com/guitar-blog/wp-content/uploads/6th-String-Notes-300x219.png")

var contentArr = [card1, card2, card3, card4, card5, card6];
var shuffleCards = function() {
  var indexArr = [];
  var shuffleArr= [{},{},{},{},{},{}];

  var count = 0;

  // pics a random index and if index is not already picked splices card to that index.
  while (indexArr.length<6) {
    var new_number= Math.floor(Math.random() * 6);
    if (!(indexArr.includes(new_number))) {
      indexArr.push(new_number);
      shuffleArr.splice(new_number, 1, contentArr[count]);
      count++;
    }
  }

  // TODO not yet tested !!! 
  console.log("shuffleArr " + shuffleArr);

}
export class MemoryGameComponent {

}
