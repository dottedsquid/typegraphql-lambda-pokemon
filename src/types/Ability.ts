import { Field, ObjectType } from 'type-graphql'

import ItemName from './ItemName'

@ObjectType('Ability', { description: 'The ability model' })
class Ability {
  @Field({ description: 'The name of ability' })
  ability: ItemName

  @Field()
  // eslint-disable-next-line camelcase
  is_hidden: boolean

  @Field({ description: 'The slot' })
  slot: number
}

export default Ability
