import { GraphQLClient } from 'graphql-request';

export default defineNuxtPlugin(() => {
    const hygraphClient = new GraphQLClient(
        process.env.GQL_HOST!
    );

    return {
      provide: {
        hygraph: hygraphClient
      }
    }
})