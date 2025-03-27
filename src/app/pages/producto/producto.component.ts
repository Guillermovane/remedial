import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';
import { Productoservice } from '../../services/producto.service';
import { firstValueFrom } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  //Propiedades
  productos: any;
  producto = new Producto();

  //Constructor
  constructor(private productoservice: Productoservice) {
    this.getproductos();
  }
  //Metodo que hace la peticion al sercice para obtener los libros
  async getproductos(): Promise<void> {
    this.productos = await firstValueFrom(this.productoservice.getproductos());
  }

  //Metodo para agregar un libro desde el formulario
  insertartproducto(){
    this.productoservice.agregarproducto(this.producto);
    this.getproductos();
    this.producto = new Producto();
  }


  //Metodo para modificar un libro
  updateproducto(){
    this.productoservice.modificarproducto(this.producto);
    this.getproductos();
    this.producto = new Producto();
  }
    //Metodo para seleccionar un libro de la tabla
    selectproducto(productoseleccionado: Producto){
      this.producto = productoseleccionado;
    }
   //Metodo para eliminar un libro
    deleteproducto(){
      this.productoservice.eliminarProducto(this.producto);
      this.getproductos();
      this.producto = new Producto();
    }


  //Metodo para limpiar formulario
  limpiarproducto(){
    this.producto = new Producto();
  }
}
