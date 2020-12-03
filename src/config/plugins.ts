import { GraphQLRequestContext } from 'apollo-server-plugin-base'

import logger from './logger'

const customPlugin = {
  serverWillStart() {
    logger.info('Server starting!')
  },
  requestDidStart(requestContext: GraphQLRequestContext) {
    return {
      willSendResponse: () => {
        const { request, response } = requestContext
        logger.info({ request, response })
      },
    }
  },
}

export default [customPlugin]
