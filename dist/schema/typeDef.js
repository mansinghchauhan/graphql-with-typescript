import { gql } from "apollo-server-express";
const typeDefs = gql `
  type User {
    id: ID!
    name: String!
    email: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    user: User
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    getBooks: [Book]
    getBook(id: ID!): Book
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    addBook(title: String!, author: String!, userId: ID!): Book
  }
`;
export default typeDefs;
