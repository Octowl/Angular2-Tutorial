import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
          { id: 1, name: 'Mr. M. M. Meer' },
          { id: 2, name: 'Abdul The Hackinator' },
          { id: 3, name: 'Burhan' },
          { id: 4, name: 'Abdullah Droid Hunter' },
          { id: 5, name: 'The Octowl' }
      ];
      return {heroes};
    }
}
