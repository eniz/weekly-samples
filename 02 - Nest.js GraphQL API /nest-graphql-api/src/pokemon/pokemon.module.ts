import { PokemonResolver } from './pokemon.resolver'
import { Module } from '@nestjs/common'
import { PokemonService } from './pokemon.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pokemon } from './pokemon.entity'

@Module({
  imports: [ TypeOrmModule.forFeature([ Pokemon ]) ],
  providers: [ PokemonResolver, PokemonService ]
})
export class PokemonModule {}
