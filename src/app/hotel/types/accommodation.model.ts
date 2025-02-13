
export interface GroupedTypeAccommodation {
  [Type: string]: TypeAccommodation[]
}

export interface TypeAccommodation {
  id:          number;
  tipo:        string;
  acomodacion: string;
}
