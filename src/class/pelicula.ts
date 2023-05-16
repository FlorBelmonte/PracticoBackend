export class Pelicula {
    id: string;
    titulo: string;
    actoresPrincipales: string[];
    generos: string[];
    sinopsis: string;
    imagen: string;
    duracion: number;
    fechaLanzamiento: number;
  
    constructor(
      id: string,
      titulo: string,
      actoresPrincipales: string[],
      generos: string[],
      sinopsis: string,
      imagen: string,
      duracion: number,
      fechaLanzamiento: number
    ) {
      this.id = id;
      this.titulo = titulo;
      this.actoresPrincipales = actoresPrincipales;
      this.generos = generos;
      this.sinopsis = sinopsis;
      this.imagen = imagen;
      this.duracion = duracion;
      this.fechaLanzamiento = fechaLanzamiento;
    }
  
    toString(): string {
      return `${this.id},${this.titulo},${this.actoresPrincipales},${this.generos},${this.sinopsis}, ${this.imagen}, ${this.duracion}, ${this.fechaLanzamiento}`;
    }

  }
  