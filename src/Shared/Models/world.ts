export interface world{
  id: number;
  country : string;
  city : string;
  language : string;
  food : string;

  getWorldById(number: number): any;

  updateWorld(world: world): void;

  generateNewId(): any;

  addWorld(world: world): void;

  deleteWorld(id: any): void;
}
