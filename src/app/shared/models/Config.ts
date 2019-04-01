import { Column } from "./Column";

export interface Config {
  title: string;
  endpoint: string;
  columns: Array<Column>;
}