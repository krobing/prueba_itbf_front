import { Habitacion, RoomsXTipoAcomodacion } from "./room.model";

export interface Hotel {
  id                             : number;
  nombre                         : string;
  ciudad                         : string;
  direccion                      : string;
  nit                            : string;
  capacidad_habitaciones         : number;
  cantidad_habitaciones          : number;
  habitaciones                  ?: Habitacion[];
  habitaciones_tipo_acomodacion ?: RoomsXTipoAcomodacion;
}