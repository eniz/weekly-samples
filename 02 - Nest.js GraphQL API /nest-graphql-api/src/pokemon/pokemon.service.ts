import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly PokemonRepository: Repository<Pokemon>,
  ) {}

  public async createPokemon(data: CreatePokemonDto): Promise<Pokemon> {
    let pokemon = new Pokemon();
    pokemon.name = data.name;
    pokemon.pokeDex = data.pokeDex;
    pokemon.type = data.type;

    await this.PokemonRepository.save(pokemon);

    return pokemon;
  }

  public async getPokemons() {
    return await this.PokemonRepository.find();
  }
}
