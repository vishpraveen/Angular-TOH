import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // baseUrl = 'http://caringhood.co.in/homesfresh/homesfresh_api/api/';
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  location = 'location';
  response1: String;

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getLocation() {
    
    this.http.get<any>(this.baseUrl)
    .subscribe(response => {
      this.response1 = JSON.stringify(response);
      // this.messageService.add(`API Resposne: ${response1}`);
      console.log("API Resposne: "+this.response1);

    })
  }
}
