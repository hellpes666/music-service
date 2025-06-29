import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // удаляет лишние поля
			forbidNonWhitelisted: true, // ошибка, если есть лишние поля
			transform: true, // автоматически преобразует payload в типы, указанные в DTO
		})
	);

	app.enableCors({
		origin: 'http://localhost:5173',
		credentials: true,
	});
	app.use(cookieParser());

	const config = new DocumentBuilder()
		.setTitle('Music Service')
		.setDescription(
			'API documentation for the Music Service, which provides endpoints to manage songs, artists, albums, and playlists.'
		)
		.setVersion('1.0')
		.addTag('music')
		.build();
	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, documentFactory);

	await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
