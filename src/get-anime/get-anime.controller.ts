import { Controller, Get } from '@nestjs/common';
import { GetAnimeService } from './get-anime.service';

@Controller('get-anime')
export class GetAnimeController {
  constructor(private readonly getAnimeService: GetAnimeService) {}
  @Get()
  getAnime() {
    return this.getAnimeService.findAll();
  }
}
