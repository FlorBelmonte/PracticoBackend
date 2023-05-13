import { Injectable } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import * as fs from "fs";
import { CreatePeliculaDto } from 'src/dto/create-peliculas.dto';

@Injectable()
export class PeliculaService {
  private peliculas: Pelicula[] = [];
 


  getPeliculaById(id: number): Pelicula {
    return this.peliculas.find((pelicula) => pelicula.id === id);
  }

  getAllPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  createPelicula(createPeliculaDto: CreatePeliculaDto): Pelicula {
    const pelicula: Pelicula = {
      id: this.generarId(),
      ...createPeliculaDto,
    };
    this.peliculas.push(pelicula);
    return pelicula;
  }


  updatePelicula(pelicula: Pelicula, id: number): Pelicula {
    const index = this.peliculas.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.peliculas[index] = {
        ...pelicula,
        id,
      };
      return this.peliculas[index];
    }
    return null;
  }

  deletePelicula(id: number): boolean {
    const index = this.peliculas.findIndex((pelicula) => pelicula.id === id);
    if (index !== -1) {
      this.peliculas.splice(index, 1);
      return true;
    }
    return false;
  }

  private generarId(): number {
    return this.peliculas.length + 1;
  }
}
