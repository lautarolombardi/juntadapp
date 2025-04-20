import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getTypeOrmConfig } from "./config/typeorm.config";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { PlayersModule } from "./players/players.module";
import { MatchesModule } from "./matches/matches.module";
import { MatchesPlayersModule } from "./matches_players/matches_players.module";
import { StatsModule } from "./stats/stats.module";
import { GamesModule } from "./games/games.module";
import { TeamsModule } from "./teams/teams.module";
import { AuthModule } from "./auth/auth.module";

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
    UsersModule,
    PlayersModule,
    MatchesModule,
    MatchesPlayersModule,
    StatsModule,
    GamesModule,
    TeamsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
