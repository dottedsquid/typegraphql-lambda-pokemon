import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/bff-testing.log', level: 'error' }),
    new transports.File({ filename: 'logs/bff-testing.log' }),
  ],
})

const logFormat = format.printf((info) => {
  let { message } = info
  if (typeof message === 'object') message = JSON.stringify(message)
  return `${info.timestamp} ${info.level}: ${message}`
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), logFormat),
    })
  )
}

export default logger
