import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { USER_DTO } from './types';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	public async getAll(@Query('query') query: USER_DTO.GetAllUsersByQuery) {
		return await this.userService.findAll({ query });
	}

	@Get(':id')
	public async getById(@Param('id') id: string) {
		return await this.userService.findById(id);
	}
}
