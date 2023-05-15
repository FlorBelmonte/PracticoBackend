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
    setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    setActoresPrincipales(actoresPrincipales: string[]): void {
      this.actoresPrincipales = actoresPrincipales;
    }
  
    setGeneros(generos: string[]): void {
      this.generos = generos;
    }
  
    setSinopsis(sinopsis: string): void {
      this.sinopsis = sinopsis;
    }
  
    setImagen(imagen: string): void {
      this.imagen = imagen;
    }
  
    setDuracion(duracion: number): void {
      this.duracion = duracion;
    }
  
    setFechaLanzamiento(fechaLanzamiento: number): void {
      this.fechaLanzamiento = fechaLanzamiento;
    }
  }
  