# NestJS GraphQL API with TypeORM and Postgres

I will build a GraphQL API with Nest.js. 

## Why GraphQL?
There is a problem in front-end development.
What if the frontend requirements change and we need an extra data field that is only available through a separate endpoint?
Now we have to make two HTTP requests and we will have extra data which is wasteful for mobile internet usage.
The other solution is to create a new endpoint on the backend, which is expensive.

I make use of PostgreSQL and combine TypeORM.

For creating postgresql db 
```bash
$ sudo -u postgres psql
postgres=# createdb poke_db
postgres=# \q
$ psql
poke_db=# \password
poke_db=# Enter new password:
poke_db=# Retype new password:
```

Sample Queries
```bash
{
    pokemon(id: 4) {
        name,
        types
    }
}

# JSON returns

{
    "data": {
        "pokemon": {
            "name": "Charmander",
            "types": ["Fire"]
        }
    }
}

mutation{
    addPokemon(name: "Scorbunny", types: "Fire") {
        id,
        name,
        types
    }
}

{
    "data": {
        "pokemon": {
            "id": 912,
            "name": "Scorbunny",
            "types": ["Fire"]
        }
    }
}
``` 

For running  

```bash
$ npm run start:dev
```

Navigate to localhost:3000/graphql