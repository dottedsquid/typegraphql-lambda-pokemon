import { ArgsType, Field, Int } from 'type-graphql'
import { Min } from 'class-validator'

@ArgsType()
class PokemonIdArgs {
  @Field(() => Int)
  @Min(1, { message: 'Must be greater than 0' })
  id: number
}

export default PokemonIdArgs
