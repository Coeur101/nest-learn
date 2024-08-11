import { Module } from '@nestjs/common';
import { GetAnimeService } from './get-anime.service';
import { GetAnimeController } from './get-anime.controller';

@Module({
  controllers: [GetAnimeController],
  providers: [GetAnimeService],
})
export class GetAnimeModule {}
