import { Component, OnInit } from '@angular/core';

//Interfaz de Inicio
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // Propiedad publica tipo ARRAY
  public info:TarjetaInicio[];

  constructor(){this.info =[
    {
      titulo:"MP4-12C",
      marca:"McLaren",
      subtitulo:"",
      descripcion:"",
      img:"https://w0.peakpx.com/wallpaper/864/549/HD-wallpaper-mclaren-auto-speed.jpg",
      alt:"McLaren MP4"
    },
    {
      titulo:"Supra MK4",
      marca:"Toyota",
      subtitulo:"",
      descripcion:"",
      img:"https://th.bing.com/th/id/R.8204fd6b38024daf30728a5cc5fb6acc?rik=w%2flNyv6ClrcI%2bw&pid=ImgRaw&r=0",
      alt:"SUpra MK4"
    },
    {
      titulo:"Challenger",
      marca:"Dodge",
      subtitulo:"",
      descripcion:"",
      img:"https://e1.pxfuel.com/desktop-wallpaper/914/47/desktop-wallpaper-dodge-challenger-iphone-dodge-challenger.jpg",
      alt:"Dodge Challenger"
    }
  ]}

  ngOnInit(): void{

  }
}