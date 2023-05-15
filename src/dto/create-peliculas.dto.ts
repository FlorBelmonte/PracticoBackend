import { IsNumber, IsString} from 'class-validator';

export class CreatePeliculaDto {

  @IsString()
  titulo: string;

  @IsString()
  actoresPrincipales: string[];

  @IsString()
  generos: string[];

  @IsString()
  sinopsis: string;

  @IsString()
  imagen: string;

  @IsNumber()
  duracion: number;

  @IsNumber()
  fechaLanzamiento: number;
}
