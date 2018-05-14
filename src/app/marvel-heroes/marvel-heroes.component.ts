import { Component, OnInit } from '@angular/core';
import {HeroService} from './marvel-heroes.service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css'],
  providers: [ HeroService ]
})
export class MarvelHeroesComponent implements OnInit {
  heroes: string[];
  inputHero = null;
  Adding = false;
  AddHero() {
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }
  AddMore() {
    this.Adding = !this.Adding;
  }
  DeleteHero(hero, index) {
    this.heroes.splice(index , 1);
  }
  constructor(private ajax: HeroService) {
    this.heroes = this.ajax.heroes;
  }
  ngOnInit() {
  }

}
