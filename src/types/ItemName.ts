import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class ItemName {
  @Field()
  name: string

  url: string
}

export default ItemName
