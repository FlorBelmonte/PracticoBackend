import { Injectable, NotFoundException } from '@nestjs/common';
import { Pelicula } from 'src/class/pelicula';
import { v4 as uuid } from 'uuid';
import { CreatePeliculaDto } from 'src/dto/create-peliculas.dto';

@Injectable()
export class PeliculaService {
  private peliculas: Pelicula[] = [
    
  {
    "id": uuid(),
    "titulo": "El Padrino",
    "actoresPrincipales": ["Marlon Brando", "Al Pacino", "James Caan"],
    "generos": ["Crimen", "Drama"],
    "sinopsis": "La historia de una poderosa familia de la mafia italoamericana y su transformación a lo largo de varias décadas.",
    "imagen": "https://static.wikia.nocookie.net/doblaje/images/9/9a/Elpadrino.jpg/revision/latest?cb=20211023042804&path-prefix=es",
    "duracion": 175,
    "fechaLanzamiento": 1972
  },
  {
    "id": uuid(),
    "titulo": "El señor de los anillos: La comunidad del anillo",
    "actoresPrincipales": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    "generos": ["Aventura", "Fantasía"],
    "sinopsis": "Un grupo de seres de diferentes razas se embarcan en una peligrosa misión para destruir un poderoso anillo y salvar a la Tierra Media de la oscuridad.",
    "imagen": "https://s2.abcstatics.com/media/play/2020/05/29/comunidad-k3z--620x349@abc.jpg",
    "duracion": 178,
    "fechaLanzamiento": 2001
  },
  
  {
    "id": uuid(),
    "titulo": "Titanic",
    "actoresPrincipales": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    "generos": ["Drama", "Romance"],
    "sinopsis": "Un joven artista se enamora de una pasajera de clase alta a bordo del Titanic, pero su amor se ve amenazado por el trágico destino del famoso transatlántico.",
    "imagen": "https://www.ecartelera.com/carteles/2400/2425/002_m.jpg",
    "duracion": 194,
    "fechaLanzamiento": 1997
  },
  {
    "id": uuid(),
    "titulo": "El caballero oscuro",
    "actoresPrincipales": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "generos": ["Acción", "Crimen", "Drama"],
    "sinopsis": "Batman se enfrenta al Joker, un villano despiadado que amenaza con sumir a Gotham City en el caos y la anarquía.",
    "imagen": "https://i.blogs.es/cb9314/caballero-oscuro/1366_2000.jpeg",
    "duracion": 152,
    "fechaLanzamiento": 2008
  },
  {
    "id": uuid(),
    "titulo": "La La Land",
    "actoresPrincipales": ["Ryan Gosling", "Emma Stone", "John Legend"],
    "generos": ["Comedia", "Drama", "Musical"],
    "sinopsis": "Dos soñadores en Los Ángeles, un pianista de jazz y una aspirante a actriz, se enamoran mientras luchan por alcanzar sus sueños en una ciudad implacable.",
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTQ5earQWpFfSVOtK4QV-6pezi6VCkDhtohf2v2KeZnK9e4VffAaCzcHjHFenb6zN0og&usqp=CAU",
    "duracion": 128,
    "fechaLanzamiento": 2016
  }
  ];


  
  getAllPeliculas(): Pelicula[] {
    return this.peliculas;
  }
  getPeliculaById(id: string): Pelicula {
    const pelicula = this.peliculas.find((pelicula) => pelicula.id === id);
    if (!pelicula) {
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
    const peliculaExistente = this.peliculas.find((e) => e.id === newPelicula.id)
    if(peliculaExistente){
      throw new NotFoundException ('la pelicula ya existe')
    }
      this.peliculas.push(newPelicula)
  
      return newPelicula;
  }

  updatePelicula(nuevaPelicula: any, id: string): string {
    let index = this.peliculas.findIndex(pelicula => pelicula.id == id);
    if (index !== -1) {
      let peliculaExistente = this.peliculas[index];
      peliculaExistente.titulo = nuevaPelicula.titulo;
      peliculaExistente.actoresPrincipales = nuevaPelicula.actoresPrincipales;
      peliculaExistente.generos = nuevaPelicula.generos;
      peliculaExistente.sinopsis = nuevaPelicula.sinopsis;
      peliculaExistente.imagen = nuevaPelicula.imagen;
      peliculaExistente.duracion = nuevaPelicula.duracion;
      peliculaExistente.fechaLanzamiento = nuevaPelicula.fechaLanzamiento;
  
      return "ok";
    } else {
      return "404";
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
