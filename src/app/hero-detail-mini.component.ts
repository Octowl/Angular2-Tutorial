import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail-mini',
  templateUrl: './hero-detail-mini.component.html'
})
export class HeroDetailMiniComponent {
  @Input()
  hero: Hero;

  constructor(
      private router: Router
  ) {}

  gotoDetail(): void {
      this.router.navigate(['/detail', this.hero.id]);
  }
}
