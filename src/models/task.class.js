import { LEVELS } from "./levels.enum";

/* Todo esto se aplicará como prop */
export class Task {
  name = "";
  descritpion = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, descritpion, completed, level){
    this.name = name;
    this.descritpion = descritpion;
    this.completed = completed;
    this.level = level;
  }


}