import { Injectable, inject } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class Reservaservice {

  private db: Firestore = inject(Firestore);

  constructor() { }

  // Método para obtener todas las reservas con ID generado por Firestore
  getReservas() {
    const reservasCollection = collection(this.db, 'reservas');
    return collectionData(reservasCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar una reserva con ID generado automáticamente
  async agregarReserva(reserva: Reserva) {
    const reservasCollection = collection(this.db, 'reservas');

    // 🔹 Firestore generará el ID automáticamente
    const docRef = await addDoc(reservasCollection, {
      numero_de_reserva: reserva.numero_de_reserva,
      fecha: reserva.fecha,
      nombre: reserva.nombre
    });

    console.log(`Reserva agregada con ID: ${docRef.id}`);
    return docRef.id; // 🔹 Retornamos el ID generado
  }

  // Método para modificar una reserva
  async modificarReserva(reserva: Reserva) {
    if (!reserva.numero_de_reserva) {
      console.error('Error: La reserva no tiene un ID válido.');
      return;
    }

    const documentRef = doc(this.db, 'reservas', reserva.nombre);
    await updateDoc(documentRef, {
      numero_de_reserva: reserva.numero_de_reserva,
      fecha: reserva.fecha,
      nombre: reserva.nombre
    });

    console.log(`Reserva con ID: ${reserva.numero_de_reserva} actualizada correctamente.`);
  }

  // Método para eliminar una reserva
  async eliminarReserva(reserva: Reserva) {
    if (!reserva.numero_de_reserva) {
      console.error('Error: La reserva no tiene un ID válido.');
      return;
    }

    const documentRef = doc(this.db, 'reservas', reserva.nombre);
    await deleteDoc(documentRef);

    console.log(`Reserva con ID: ${reserva.numero_de_reserva} eliminada correctamente.`);
  }
}
