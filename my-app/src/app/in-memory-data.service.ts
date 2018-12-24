import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '不知火舞' },
      { id: 12, name: '孙悟空' },
      { id: 13, name: '沙加' },
      { id: 14, name: '修罗' },
      { id: 15, name: '李白' },
      { id: 16, name: '荆轲' },
      { id: 17, name: '王昭君' },
      { id: 18, name: '妲己' },
      { id: 19, name: '白起' },
      { id: 20, name: '曹操' }
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