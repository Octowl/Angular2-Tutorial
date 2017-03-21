import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'GDG Superheroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
  }
}
