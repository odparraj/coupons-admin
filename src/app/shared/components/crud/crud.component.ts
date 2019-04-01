import { Config } from "../../models/Config";
import { Action } from "../../models/Action";

export abstract class CrudComponent {

  currentAction: string = 'index';
  abstract createModel: any;
  abstract editModel: any;
  abstract config: Config;
  abstract actions: Array<Action>;
  abstract globalActions: Array<Action>;

  constructor() { }

  onAction(action) {
    eval(`this.${action.action}(action.data)`);
  }

  abstract create(data): void;
  abstract edit(data): void;
  abstract store(data): void;
  abstract update(data): void;
  abstract delete(data): void;
}
