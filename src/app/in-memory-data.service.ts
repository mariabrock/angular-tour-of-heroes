import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 11, 
        name: 'Teenage Mutant Ninja Turtles',
        img: "../assets/images/tmnt.jpg"
     },
    
      { 
        id: 12,
        name: 'Daredevil',
        img: "../assets/images/daredevil.jpg"
      },
    
      { 
        id: 13,
        name: 'Flash Gordon',
        img: "../assets/images/Flash-Gordon-vol-2.jpg"
      },
    
      { 
        id: 14,
        name: 'The Phantom',
        img: "../assets/images/thephantom.jpg"
      },
    
      { 
        id: 15,
        name: 'Rouge',
        img: "../assets/images/Rogue_from_X-Men_Evolution.jpg"
       },
    
      { 
        id: 16,
        name: 'Gamora',
        img: "../assets/images/gamora.png"
       },
    
      { 
        id: 17, 
        name: 'Goku',
        img: "../assets/images/goku.jpg"
       },
    
      { 
        id: 18, 
        name: 'Black Cat',
        img: "../assets/images/blackcat.png"
      },
    
      { 
        id: 19, 
        name: 'Mighty Morphin Power Rangers',
        img: "../assets/images/lego_power_rangers_v2.jpg"
       },
    
      { 
        id: 20, 
        name: 'Master Roshi',
        img: "../assets/images/Master_Roshi_.jpg"
       },
    
      { 
        id: 21, 
        name: 'Wonder Woman',
        img: "../assets/images/wonder_woman.jpg"
       }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
