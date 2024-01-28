import {Module} from '@nestjs/common';
import {SchoolsModule} from '../schools/schools.module';
import {ConfigModule} from '@nestjs/config';
import {SqliteConfigModule} from '../sqlite/config/sqlite.config';

@Module({
  imports: [ConfigModule.forRoot(), SchoolsModule],
  providers: [SqliteConfigModule],
})
export class AppModule {}
