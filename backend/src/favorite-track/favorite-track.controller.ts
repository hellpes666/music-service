import { Controller } from '@nestjs/common';
import { FavoriteTrackService } from './favorite-track.service';

@Controller('favorite-track')
export class FavoriteTrackController {
  constructor(private readonly favoriteTrackService: FavoriteTrackService) {}
}
