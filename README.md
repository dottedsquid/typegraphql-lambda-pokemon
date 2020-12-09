This repository consists of a simple Graphql example using Type GraphQL with apollo-server-lambda. The example uses https://pokeapi.co/ for get data about pokemons.

> **Note**: you need to have the serverless dependency installed globally

# Installation

After checkout the project then you need to run `npm install` to install the NPM dependencies.

# Development

To start your development server run `npm run start` in your terminal.

# Deploy on AWS

Run `npm run deploy` in your terminal don't forget export environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY


```jsonc
export AWS_ACCESS_KEY_ID=AKIXXXXXXXXXXXXXXXXX
export AWS_SECRET_ACCESS_KEY=Y2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```


# Playground examples

After run this example you can test this service with this query in http://localhost:4000/dev/graphql

### Query getPokemonList


```jsonc
query{
    getPokemonList{
      id
      name
      abilities{
        ability{
          name
        }
        is_hidden
        slot
      }
      weight
      height
      base_experience
      moves{
        move{
          name
        }
      }
    }
}
```


### Query getPokemonById


```jsonc
query{
  getPokemonById(id: 1){
    id
    name
    abilities{
      ability{
        name
      }
      is_hidden
      slot
    }
    weight
    height
    base_experience
    moves{
      move{
        name
      }
    }
  }
}
```
