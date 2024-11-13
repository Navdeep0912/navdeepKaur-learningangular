import { InMemoryDbService } from 'angular-in-memory-web-api';
import { worldItem } from '../Shared/Models/worldItem';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): { worldList: worldItem[] } {

    const worldList: worldItem[] = [
      { id: 1, country: "Canada", city: "Toronto", language: "English", game: "Hockey", food: "Poutine" },
      { id: 2, country: "Japan", city: "Tokyo", language: "Japanese", game: "Sumo", food: "Sushi" },
      { id: 3, country: "India", city: "Delhi", language: "Hindi", game: "Cricket", food: "Butter Chicken" },
      { id: 4, country: "Italy", city: "Rome", language: "Italian", game: "Soccer", food: "Pizza" },
      { id: 5, country: "Mexico", city: "Mexico City", language: "Spanish", game: "Football", food: "Tacos" }
    ];
    return { worldList };
  }
}
