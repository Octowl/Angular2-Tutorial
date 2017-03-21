import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
  { id: 1, name: 'Mr. M. M. Meer' },
  { id: 2, name: 'Abdul The Hackinator' },
  { id: 3, name: 'Burhan' },
  { id: 4, name: 'Abdullah Droid Hunter' },
  { id: 5, name: 'The Octowl' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GDG Superheroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}
