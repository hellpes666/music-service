import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { USER_PAYLOAD, USER_RESPONSE } from './types';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	/**
	 *
	 * @param payload - include optional query value thats can be used for the search accross the all users
	 * @returns Users With favorite tracks + artist account
	 */
	public async findAll(
		payload: USER_PAYLOAD.IFindUsersPayload
	): Promise<USER_RESPONSE.UserWithArtistAccountAndFavoriteTracks[]> {
		const where: Prisma.UserWhereInput = payload
			? {
					OR: [
						{
							firstName: {
								contains: payload.query,
								mode: 'insensitive',
							},
						},

						{
							firstName: {
								contains: payload.query,
								mode: 'insensitive',
							},
						},
						{
							email: {
								contains: payload.query,
								mode: 'insensitive',
							},
						},
						{
							phoneNumber: {
								contains: payload.query,
								mode: 'insensitive',
							},
						},
					],
				}
			: {};

		const users = await this.prisma.user.findMany({
			where,
			include: {
				artist: true,
				favoriteTracks: true,
			},
			omit: {
				password: true,
			},
		});

		return users;
	}

	public async findById(id: string): Promise<USER_RESPONSE.UserWithArtistAccountAndFavoriteTracks | null> {
		const user = await this.prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				artist: true,
				favoriteTracks: true,
			},
			omit: {
				password: true,
			},
		});

		return user;
	}
}
