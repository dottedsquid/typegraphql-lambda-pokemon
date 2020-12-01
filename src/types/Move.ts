import { Field, ObjectType } from 'type-graphql'
import ItemName from './ItemName'

@ObjectType()
class Move {
  @Field()
  move: ItemName
}

export default Move
