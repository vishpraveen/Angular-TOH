import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'WindStorm',
  };

  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroesList => this.heroes = heroesList);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   window.alert('Clicked on ' + hero.name);
  // }

}
