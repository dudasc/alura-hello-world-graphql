
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const schema = gql(`
    type Query {
        helloWorld: String!
    }
`);

const resolvers = {
    Query: {
        helloWorld: () => 'Hello World! Primeira consulta em GraphQL.',
    }
}

const server: ApolloServer = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();

server.start().then( ()=> {
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () =>
        console.log('Server running on localhost:4000' + server.graphqlPath)
    )
})
