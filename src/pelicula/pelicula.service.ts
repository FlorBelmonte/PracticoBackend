import { Injectable, NotFoundException } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import * as fs from "fs";
import { v4 as uuid } from 'uuid';
import { CreatePeliculaDto } from 'src/dto/create-peliculas.dto';

@Injectable()
export class PeliculaService {
  private peliculas: Pelicula[] = [];
  private url: string = "./src/pelicula/peliculas.txt";

  constructor() {
    const datos = fs.readFileSync(this.url, "utf-8");

    if (datos.length) {
      const renglon = datos.split("\r\n");

      for (let linea of renglon) {
        let partes = linea.split(",");

        let pelicula = new Pelicula(
          partes[0],
          partes[1],
          partes[2].split(','),
          partes[3].split(','),
          partes[4],
          partes[5],
          parseInt(partes[6]),
          parseInt(partes[7]),
        );

        this.peliculas.push(pelicula);
      }
    }
  }
  getAllPeliculas(): Pelicula[] {
    return this.peliculas;
  }
  getPeliculaById(id: string): Pelicula {
    const pelicula = this.peliculas.find((pelicula) => pelicula.id === id);
    if (!pelicula) {
      // devolver una exception
      throw new NotFoundException();
    }

    return pelicula;
  }


  createPelicula(CreatePeliculaDto: CreatePeliculaDto): Pelicula {
    const newPelicula: Pelicula = new Pelicula (
      uuid(),
      CreatePeliculaDto.titulo,
      CreatePeliculaDto.actoresPrincipales,
      CreatePeliculaDto.generos,
      CreatePeliculaDto.sinopsis,
      CreatePeliculaDto.imagen,
      CreatePeliculaDto.duracion,
      CreatePeliculaDto.fechaLanzamiento
    );
    const dataAppend = this.peliculas.length
         ? "\n" + newPelicula.toString()
        : newPelicula.toString();
  
       this.peliculas.push(newPelicula);
  
       fs.appendFileSync(this.url, dataAppend);
  
      return newPelicula;
  }

updatePelicula(nuevaPelicula: any, id: string): string{
  let index = this.peliculas.findIndex(pelicula => pelicula.id == id);
  if (index != -1){
    let peliculaExistente = this.peliculas[index];
    peliculaExistente.setTitulo(nuevaPelicula.titulo);
    peliculaExistente.setActoresPrincipales(nuevaPelicula.actoresPrincipales);
    peliculaExistente.setGeneros(nuevaPelicula.generos);
    peliculaExistente.setSinopsis(nuevaPelicula.sinopsis);
    peliculaExistente.setImagen(nuevaPelicula.imagen);
    peliculaExistente.setDuracion(nuevaPelicula.duracion);
    peliculaExistente.setFechaLanzamiento(nuevaPelicula.fechaLanzamiento);

    return "ok"
  } else {
    return "404"
  }
}


  deletePelicula(id: string): boolean {
    const index = this.peliculas.findIndex((pelicula) => pelicula.id === id);
    if (index !== -1) {
      this.peliculas.splice(index, 1);
      return true;
    }
    return false;
  }

}
