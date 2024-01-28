import {Inject} from '@nestjs/common';
import {ConfigModule, ConfigType, registerAs} from '@nestjs/config';

const sqliteConfig = registerAs('sqlite', () => {
  return {
    databaseDirectory: process.env.SQLITE_DATABASE_DIRECTORY,
    databaseFilename: process.env.SQLITE_DATABASE_FILENAME,
  };
});

export const SQLITE_CONFIG = sqliteConfig.KEY;
export const InjectSqliteConfig = () => Inject(SQLITE_CONFIG);

export class SqliteConfigModule {
  public static register() {
    return ConfigModule.forFeature(sqliteConfig);
  }
}

export type SqliteConfig = ConfigType<typeof sqliteConfig>;
