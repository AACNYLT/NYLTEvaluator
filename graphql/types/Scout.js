module.exports = `
    type Scout {
        id: String!
        firstName: String!
        lastName: String!
        dateOfBirth: String
        gender: String
        username: String
        isEnabled: Boolean!
    }
    
    type Query {
        scout(id: String!): Scout
        scouts: [Scout]
    }
    
    type Mutation {
        createScout(id: String!, firstName: String!, lastName: String!, dateOfBirth: String, gender: String, username: String password: String, isEnabled: Boolean!): Scout
        editScout(id: String!, firstName: String!, lastName: String!, dateOfBirth: String, gender: String, username: String, password: String, isEnabled: Boolean!): Scout
        deleteScout(id: String!, firstName: String!, lastName: String!, dateOfBirth: String, gender: String, username: String, isEnabled: Boolean!): Scout
    }
`;