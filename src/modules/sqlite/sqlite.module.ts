import {Module} from '@nestjs/common';
import {Database} from 'sqlite';
import {
  SQLITE_CONFIG,
  SqliteConfig,
  SqliteConfigModule,
} from './config/sqlite.config';

@Module({
  imports: [SqliteConfigModule.register()],
  providers: [
    {
      provide: Database,
      useFactory: async (sqliteConfig: SqliteConfig): Promise<Database> => {
        const sqlite3 = await import('sqlite3');
        const sqlite = await import('sqlite');
        const db = await sqlite.open({
          filename: `${sqliteConfig.databaseDirectory}/${sqliteConfig.databaseFilename}`,
          driver: sqlite3.Database,
        });
        // await db.migrate({
        //   migrationsPath: './src/migrations',
        // });
        return db;
      },
      inject: [SQLITE_CONFIG],
    },
  ],
  exports: [Database],
})
export class SqliteModule {}
