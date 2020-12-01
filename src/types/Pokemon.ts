import { Field, ObjectType, Int } from 'type-graphql'

import Ability from './Ability'
import Move from './Move'

@ObjectType({ description: 'The pokemon model' })
class Pokemon {
  @Field(() => Int, { description: 'Pokemon ID' })
  id!: number

  @Field({ description: 'Pokemon name' })
  name: string

  @Field(() => [Ability])
  abilities: Ability[]

  @Field(() => Int)
  weight: number

  @Field(() => Int)
  height: number

  @Field(() => Int)
  // eslint-disable-next-line camelcase
  base_experience: number

  @Field(() => [Move])
  moves: Move[]
}

export default Pokemon
