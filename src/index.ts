import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import resolvers from './resolvers'
import logger from './config/logger'
import plugins from './config/plugins'
import onHealthCheck from './config/onHealthCheck'
import formatError from './config/formatError'

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers,
  })

  const server = new ApolloServer({
    schema,
    plugins,
    onHealthCheck,
    formatError,
  })

  const { url } = await server.listen(4000)

  logger.info(`🚀 Server ready at ${url}`)
  logger.info(
    `Try your health check at: ${url}.well-known/apollo/server-health`
  )
}

bootstrap()
