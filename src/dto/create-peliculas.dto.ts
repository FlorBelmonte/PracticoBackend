import { IsNumber, IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreatePeliculaDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsArray()
  @IsNotEmpty()
  actoresPrincipales: string[];

  @IsArray()
  @IsNotEmpty()
  generos: string[];

  @IsString()
  @IsNotEmpty()
  sinopsis: string;

  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsNumber()
  duracion: number;

  @IsNumber()
  fechaLanzamiento: number;
}
