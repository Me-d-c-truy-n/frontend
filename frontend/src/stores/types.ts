import { Align } from "../types/align";

export interface ISettings {
  fontSize: string;
  fontStyle: string;
  leading: string;
  align: Align;
}

export interface IServer {
  listServer: string[];
  server: string;
}