import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getTypeOrmConfig } from "./config/typeorm.config";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `.env.${process.env.NODE_ENV}`,
        ".env", // fallback
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
