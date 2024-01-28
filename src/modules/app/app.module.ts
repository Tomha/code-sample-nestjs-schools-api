import {Module, ValidationPipe} from '@nestjs/common';
import {SchoolsModule} from '../schools/schools.module';
import {ConfigModule} from '@nestjs/config';
import {SqliteConfigModule} from '../sqlite/config/sqlite.config';
import {APP_PIPE} from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SchoolsModule,
  ],
  providers: [
    SqliteConfigModule,
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({
          transform: true,
        });
      },
    },
  ],
})
export class AppModule {}
