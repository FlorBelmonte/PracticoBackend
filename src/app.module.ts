import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasController } from './pelicula/pelicula.controller';
import { PeliculaService } from './pelicula/pelicula.service';

@Module({
  imports: [
 ],
  controllers: [AppController, PeliculasController],
  providers: [AppService, PeliculaService],
})
export class AppModule {}
