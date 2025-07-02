import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { GenreModule } from './genre/genre.module';
import { FavoriteTrackModule } from './favorite-track/favorite-track.module';

@Module({
	imports: [PrismaModule, AuthModule, UserModule, ArtistModule, AlbumModule, TrackModule, GenreModule, FavoriteTrackModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
