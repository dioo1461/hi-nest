import { Controller, Delete, Get, Param, Post, Put, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService:MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') serachingYear: string) {
        return `searching for a movie made after: ${serachingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') id: number) : Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') id:number) {
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:id')
    patch(@Param('id') id:number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(id, updateData);
    }

    
}
