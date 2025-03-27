import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserva } from '../../models/reserva.model';
import { Reservaservice } from '../../services/reserva.service';
import { firstValueFrom } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  // Propiedades
  reservas: any;
  reserva = new Reserva();

  // Constructor
  constructor(private reservaService: Reservaservice) {
    this.getReservas();
  }

  // Método que hace la petición al servicio para obtener las reservas
  async getReservas(): Promise<void> {
    this.reservas = await firstValueFrom(this.reservaService.getReservas());
  }

  // Método para agregar una reserva desde el formulario
  insertarReserva() {
    this.reservaService.agregarReserva(this.reserva);
    this.getReservas();
    this.reserva = new Reserva();
  }

  // Método para seleccionar una reserva de la tabla
  selectReserva(reservaSeleccionada: Reserva) {
    this.reserva = reservaSeleccionada;
  }

  // Método para modificar una reserva
  updateReserva() {
    this.reservaService.modificarReserva(this.reserva);
    this.getReservas();
    this.reserva = new Reserva();
  }

  // Método para eliminar una reserva
  deleteReserva() {
    this.reservaService.eliminarReserva(this.reserva);
    this.getReservas();
    this.reserva = new Reserva();
  }

  // Método para limpiar formulario
  limpiarFormulario() {
    this.reserva = new Reserva();
  }
}