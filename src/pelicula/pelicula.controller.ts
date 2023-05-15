import { Controller, Get, Post, Put, Delete, Body, Param,  ParseUUIDPipe,  NotFoundException } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import { CreatePeliculaDto } from 'src/dto/create-peliculas.dto';
import { PeliculaService } from './pelicula.service';

@Controller('peliculas')
export class PeliculasController {
    constructor (private readonly peliculaService : PeliculaService){}

@Get()
    getAllPeliculas(): Pelicula[] {
      return this.peliculaService.getAllPeliculas();
    }
    

@Get(':id')
getPeliculaById(@Param("id", ParseUUIDPipe)id: string,): Pelicula {
  const pelicula = this.peliculaService.getPeliculaById(id)
    if (!pelicula) {
      throw new NotFoundException('pelicula no encontrada');
    }
    return pelicula;
  }

  @Post()
  postPelicula(@Body() CreatePeliculaDto: CreatePeliculaDto) {
    return this.peliculaService.createPelicula(CreatePeliculaDto)
  }

@Put(':id')
public updatePelicula(@Body() pelicula: Pelicula, @Param('id') id: string){
    return this.peliculaService.updatePelicula(pelicula, id)
}


@Delete(':id')
    deletePelicula(@Param('id') id: string): boolean{
        return this.peliculaService.deletePelicula(id)
    }
}