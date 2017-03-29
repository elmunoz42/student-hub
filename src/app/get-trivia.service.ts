import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetTriviaService {
  //DinoIpsum
  private _url: string ="http://dinoipsum.herokuapp.com/api/?format=json&words=1&paragraphs=1";

  // LastFM
  // private _url: string = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=8dc2d4f18f375fe36dd7b63b96a2e243&format=json"

  constructor (
    private _http: Http
  ) {}


  _errorHandler(error: Response){
    console.error(error)
    return Observable.throw(error || "Server error");
  }

  getTrivia() {
    return this._http.get(this._url)
    .map((res :Response) => res.json())
    .catch(this._errorHandler);
  }

  // NOTE from tutorial https://codeforgeek.com/2017/03/making-http-calls-using-angular-2/
  // getNews() {
  //   return this._http.get(`https://hn.algolia.com/api/v1/search_by_date?query=node&tags=story`)
  //   .map((res:Response) => res.json())
  //   .catch(this._errorHandler);
  // }
}

//   var triviaGetter = function(){
//   var artists = ['Death Cab For Cutie', 'the Beatles','Chicago','Boston','Abba','Prince', 'Metallica', 'Eagles', 'Rihanna', 'AC/DC', 'Eminem', 'Aerosmith', 'U2', 'Adele', 'Santana', 'Coldplay', 'R.E.M'];
//   var trivia = [];
//   for (var i = 0, len = artists.length; i < len; i++) {
//       $.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+ artists[i]+"&api_key=8dc2d4f18f375fe36dd7b63b96a2e243&format=json")
//     .then(function (result) {
//     var artist = result.artist.name.split(' ');
//     // NOTE this separates the link from the rest of the bio.
//     var bioArrWithLink = result.artist.bio.summary.split('<a');
//     var bioArr = bioArrWithLink[0].split(' ');
//     // NOTE replaces the artist name with blank space
//     for (var j = 0; j < bioArr.length; j++) {
//       if (bioArr[j]===artist[0]) {
//         bioArr[j] = "______";
//       } else if (bioArr[j]===artist[1]) {
//         bioArr[j] = "______";
//       }  else if (bioArr[j]===artist[2]) {
//         bioArr[j] = "______";
//       }  else if (bioArr[j]===artist[3]) {
//         bioArr[j] = "______";
//       }
//     };
//     var bioWithBlanks = bioArr.join(' ');
//         trivia.push({
//           author: "lastFM",
//           title: result.artist.tags.tag[0].name + ", " + result.artist.tags.tag[1].name + ", " + result.artist.tags.tag[2].name,
//           body: bioWithBlanks
//         });
//     });
//   };
//
//   return trivia;
// };
