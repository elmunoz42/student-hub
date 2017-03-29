import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { GetTriviaService } from './get-trivia.service';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    MemoryGameComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetTriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
