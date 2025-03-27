import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto.model';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class Productoservice {

  private db: Firestore = inject(Firestore);

  constructor() { }

//Metodo para obtener todos los documentos de la coleccion
  getproductos() {
    const productosCollection = collection(this.db, 'productos');
    return collectionData((productosCollection), { idField: 'id' }).pipe(first());
  }


  //Metodo para agregar un documento a la coleccion
  agregarproducto(producto: Producto) {
    const productosCollection = collection(this.db, 'productos');
    const productoData = {
      id: producto.id,
      descripcion: producto.descripcion,
      precio: producto.precio
    };
    addDoc(productosCollection, productoData);
  }

  //Metodo para modificar un documento de la coleccion
  modificarproducto(producto: Producto) {
    const documentRef = doc(this.db, 'productos', producto.id);
    updateDoc(documentRef, {
      id: producto.id,
      descripcion: producto.descripcion,
      precio: producto.precio
    })
  }

  //Metodo para eliminar un documento de la coleccion
    eliminarProducto(producto: Producto) {
      const documentRef = doc(this.db, 'productos', producto.id);
      deleteDoc(documentRef);
    }
}
