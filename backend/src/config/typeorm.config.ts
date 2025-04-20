import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: "mysql",
    host: process.env.ORM_HOST,
    port: +(process.env.ORM_PORT || 3307),
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PASSWORD,
    database: process.env.ORM_DATABASE,
    synchronize: process.env.ORM_SYNCHRONIZE == "true",
    autoLoadEntities: process.env.ORM_AUTO_LOAD_ENTITIES == "true",
    entities: ["dist/**/*.entity.{js,ts}"],
    logging: process.env.ORM_LOGGING == "true",
    ssl: process.env.ORM_SSL_CONNECTION == "true",
  };
};
