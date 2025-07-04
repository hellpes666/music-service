import { Prisma } from '@prisma/client';

export type UserWithArtistAccountAndFavoriteTracks = Prisma.UserGetPayload<{
	include: {
		artist: true;
		favoriteTracks: true;
	};
	omit: {
		password: true;
	};
}>;
