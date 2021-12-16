import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // a service that all app classes can use to get heroes. it relies on dependency injection
  //to inject this service into the HeroesComponent constructor

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //returns the mock heroes data
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
    //has an asynchronous signature. It returns a mock hero as an Observable, using the RxJS of() function
  }
}
