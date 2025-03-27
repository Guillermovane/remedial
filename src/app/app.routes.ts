import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { LibroComponent } from './pages/libro/libro.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { AsercaDeComponent } from './pages/aserca-de/aserca-de.component';

export const routes: Routes = [
    { path: 'productos', component: ProductoComponent },
    { path: 'libros', component: LibroComponent },
    { path: 'reservas', component: ReservaComponent },
    { path: 'about', component: AsercaDeComponent },
    { path: '**', redirectTo: 'about' },
];