// @ts-ignore
import { InMemoryDbService } from 'angular-in-memory-web-api';
// @ts-ignore
import { world } from '../Model/world';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): { worldList: world[] } {
    const worldList: world[] = [
      { id: 1, country: "Canada", city: "Toronto", language: "English", food: "Poutine" },
      { id: 2, country: "Japan", city: "Tokyo", language: "Japanese", food: "Sushi" },
      { id: 3, country: "France", city: "Paris", language: "French", food: "Croissant" },
      { id: 4, country: "Italy", city: "Rome", language: "Italian", food: "Pasta" }
    ];
    return { worldList };
  }
}
