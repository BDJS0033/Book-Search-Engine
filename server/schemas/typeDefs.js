const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    me: User
}

type Mutation {
    login()
    addUser()
    saveBook()
    removeBook()
}

type User {
    _id:
    username:
    email:
    bookCount:
    saveBooks:
}

type Book {
    bookId:
    authors:
    description:
    title:
    image:
    link:
}

type Auth {
    token:
    user:
}
`;

module.exports = typeDefs;