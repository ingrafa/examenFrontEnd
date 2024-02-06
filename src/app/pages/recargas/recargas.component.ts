import { Component } from '@angular/core';
import { from } from 'rxjs';
import { RecargaService } from '../../services/recarga.service';


@Component({
  selector: 'app-recargas',
  standalone: true,
  imports: [],
  templateUrl: './recargas.component.html',
  styleUrl: './recargas.component.css'
})
export class RecargasComponent {

}

// recarga.component.ts

export class RecargaComponent {
  recarga = {
    numeroTelefono: '',
    operador: '',
    monto: 0
  };

  mensaje: string = '';

  constructor(private recargaService: RecargaService) {}

  realizarRecarga() {
    // Validación de campos
    if (this.recarga.numeroTelefono && this.recarga.operador && this.recarga.monto > 0) {
      // Llamar al servicio HTTP para realizar la recarga
      this.recargaService.realizarRecarga(this.recarga).subscribe(
        (respuesta) => {
          this.mensaje = respuesta;
        },
        (error) => {
          this.mensaje = 'La recarga ha fallado. Verifica los datos proporcionados.';
        }
      );
    } else {
      this.mensaje = 'Por favor, completa todos los campos correctamente.';
    }
  }
}
