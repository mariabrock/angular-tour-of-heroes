//The parent HeroesComponent will control the child HeroDetailComponent by sending it a new hero to display whenever the user selects a hero from the list.
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  // a decorator function that specifies metadata for the HeroesComponent.component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//export your data so you can import is somewhere else!

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  // this injects the HeroService.ts to the HeroesComponent and identifies it as the service DI site

  ngOnInit(): void {
    // a life cycle hook. you want to put your initialization logic here
    this.getHeroes();
    //this allows Angular to call OnInit after constructing the HeroesComponent
  }

  getHeroes(): void {
    //this retrieves the heroes from the service
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
