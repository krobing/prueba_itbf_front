import { Hotel } from "./hotel.model";

export interface Habitacion {
  id                 : number;
  hotel_id           : number;
  tipo_acomodacion_id: number;
  tipo               : string;
  acomodacion        : string;
  hotel             ?: Hotel;
}

export type RoomsXTipoAcomodacion = {
  [Id: string]: {
      "tipo_acomodacion_id": number;
      "tipo"               : string;
      "acomodacion"        : string;
      "count"              : number;
  }
}
