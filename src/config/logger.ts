import { createLogger, format, transports } from 'winston'

const logFormat = format.printf((info) => {
  let { message } = info
  if (typeof message === 'object') message = JSON.stringify(message)
  return `${info.timestamp} ${info.level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), logFormat),
    }),
  ],
})

export default logger
