import { IsOptional, IsString } from 'class-validator';

export class IFindUsersPayload {
	@IsOptional()
	@IsString()
    query: string;
}
