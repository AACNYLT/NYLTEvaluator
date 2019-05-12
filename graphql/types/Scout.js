module.exports = `
    type Scout {
        _id: String!
        orgId: String!
        firstName: String!
        lastName: String!
        dateOfBirth: String
        gender: String
        username: String
        isEnabled: Boolean!
    }
    
    type Query {
        scout(_id: String!): Scout
        scouts: [Scout]
    }
    
    type Mutation {
        createScout(orgId: String!, firstName: String!, lastName: String!, dateOfBirth: String, gender: String, username: String password: String, isEnabled: Boolean!): Scout
        editScout(_id: String!, orgId: String!, firstName: String!, lastName: String!, dateOfBirth: String, gender: String, username: String, password: String, isEnabled: Boolean!): Scout
        deleteScout(_id: String!): Scout
    }
`;