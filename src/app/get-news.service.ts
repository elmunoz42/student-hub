import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetNewsService {

  constructor (
    private _http: Http
  ) {}

  getMtvNews(){

  //   this._http.get("https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=114a62f01a5049e79f27797505873305").then(function(response) {
  //     for (var i = 0; i < response.articles.length; i++) {
  //       artarr[i] = {
  //         author: response.articles[i].author,
  //         blogs: [],
  //         body: response.articles[i].description,
  //         img_link: response.articles[i].urlToImage,
  //         title: response.articles[i].title,
  //         url: response.articles[i].url
  //       }
  //     }
  //   }
  // }
  }
