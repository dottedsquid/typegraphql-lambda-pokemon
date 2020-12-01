import fetch from 'node-fetch'

import Pokemon from '../types/Pokemon'
import ItemName from '../types/ItemName'

interface PokemonUrlList {
  results: ItemName[]
}
class PokemonService {
  async getPokemonList(): Promise<Pokemon[]> {
    const pokemonsUrlList: PokemonUrlList = await this.fetchPokemonUrlList()
    const pokemonsUrl: string[] = []
    pokemonsUrlList.results.map((pokemon: ItemName) =>
      pokemonsUrl.push(pokemon.url)
    )
    const response = await this.fetchPokemonsByUrlArray(pokemonsUrl)
    return response
  }

  async getPokemonById(id: number) {
    const response = await this.fetchPokemonById(id)
    return response
  }

  private fetchPokemonById = (id: number): Promise<Pokemon> =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())

  private fetchPokemonUrlList = (): Promise<PokemonUrlList> =>
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`).then((res) =>
      res.json()
    )

  private fetchPokemonsByUrlArray = (
    pokemonsUrl: string[]
  ): Promise<Pokemon[]> => {
    const requestAync = (url: string) => fetch(url).then((res) => res.json())
    return Promise.all(pokemonsUrl.map(requestAync))
  }
}

export default PokemonService
