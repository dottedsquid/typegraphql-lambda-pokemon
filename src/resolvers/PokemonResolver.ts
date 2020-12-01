import { Args, Query, Resolver } from 'type-graphql'

import Pokemon from '../types/Pokemon'
import PokemonService from '../services/PokemonService'
import PokemonIdArgs from '../types/args/PokemonIdArgs'

@Resolver()
class PokemonResolver {
  private pokemonService = new PokemonService()

  @Query(() => [Pokemon])
  getPokemonList() {
    return this.pokemonService.getPokemonList()
  }

  @Query(() => Pokemon)
  getPokemonById(@Args() { id }: PokemonIdArgs) {
    return this.pokemonService.getPokemonById(id)
  }
}

export default PokemonResolver
