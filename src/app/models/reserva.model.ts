import { Timestamp } from "firebase/firestore";

export class Reserva {
  nombre!: string;
  numero_de_reserva!: number;
  fecha!: Timestamp;
}
