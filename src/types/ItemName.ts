import { Field, ObjectType } from 'type-graphql'

@ObjectType('ItemName')
class ItemName {
  @Field()
  name: string

  url: string
}

export default ItemName
