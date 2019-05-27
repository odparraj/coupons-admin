import { Column } from "./Column";
import { Filter } from "./Filter";

export interface Config {
  title: string;
  endpoint: string;
  columns: Array<Column>;
  filters: Array<Filter>;
}