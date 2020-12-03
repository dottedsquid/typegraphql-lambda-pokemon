const formatError = (error: Error) => {
  if (error.message.includes('https://pokeapi.co/')) {
    return new Error('Internal server error')
  }
  return error
}

export default formatError
