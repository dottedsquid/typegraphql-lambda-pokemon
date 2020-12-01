import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import resolvers from './resolvers'

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers,
  })
  const server = new ApolloServer({
    schema,
    playground: true,
  })
  const { url } = await server.listen(4000)
  // eslint-disable-next-line no-console
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
