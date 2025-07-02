import { Module } from '@nestjs/common';
import { FavoriteTrackService } from './favorite-track.service';
import { FavoriteTrackController } from './favorite-track.controller';

@Module({
  controllers: [FavoriteTrackController],
  providers: [FavoriteTrackService],
})
export class FavoriteTrackModule {}
