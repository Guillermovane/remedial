import { Timestamp } from "firebase/firestore";

export class Reserva {
  id?: string; 
  nombre!: string;
  numero_de_reserva!: number;
  fecha!: Timestamp;
}
