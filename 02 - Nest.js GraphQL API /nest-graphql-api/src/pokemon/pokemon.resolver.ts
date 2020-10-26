import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Pokemon } from './pokemon.entity'
import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { PokemonService } from './pokemon.service'
import { InputPokemon } from './input/pokemon.input'

/*
Resolvers are what resolves a GraphQL request to a function.
While there are many ways to make a GraphQL resolver, we will use the @Resolver decorator from the NestJS GraphQL library.
 */
@Resolver((of) => Pokemon)
export class PokemonResolver {
  constructor (private readonly pokemonService: PokemonService) {}

  @Query(() => [ CreatePokemonDto ])
  async pokemon () {
    return this.pokemonService.getPokemons()
  }

  @Mutation(() => CreatePokemonDto)
  async createPokemon (@Args('data') data: InputPokemon) {
    return this.pokemonService.createPokemon(data)
  }
}