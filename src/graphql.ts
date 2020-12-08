import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-lambda'
import { buildSchema } from 'type-graphql'

import resolvers from './resolvers'
import plugins from './config/plugins'
import formatError from './config/formatError'

const getHandler = async () => {
  const schema = await buildSchema({
    resolvers,
  })
  const server = new ApolloServer({
    schema,
    plugins,
    formatError,
  })
  return server.createHandler()
}

const graphqlHandler = (event: any, context: any, callback: any) => {
  getHandler().then((handler) => handler(event, context, callback))
}

exports.graphqlHandler = graphqlHandler
