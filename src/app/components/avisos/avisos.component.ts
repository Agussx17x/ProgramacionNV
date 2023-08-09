import { Component } from '@angular/core';
import { Avisos } from 'src/app/models/avisos';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent {
  public info:Avisos[];

  constructor(){this.info =[
    {
      titulo:"Cambio de Actividad",
      aviso:"Dia 10/08 se dictaran clases de ESI",
      icono:"",
      img:""
    },
    {
      titulo:"Horario de Taller",
      aviso:"Cambiaron los horarios de los talleres de 6to 1ra",
      icono:"",
      img:""
    },
    {
      titulo:"Falta de Profesor",
      aviso:"Profe de ingles no asistira a clases. Se retiran a las 15hs",
      icono:"",
      img:""
    },    
  ]}
}
