module.exports = `
    type Umbrella {
        _id: String!
        name: String!
        orgs: [Org]
    }
    
    type Query {
        umbrella(_id: String!): Umbrella
        umbrellas: [Umbrella]
    }
    
    type Mutation {
        createUmbrella(name: String!): Umbrella
        editUmbrella(_id: String!, name: String!): Umbrella
        deleteUmbrella(_id: String!, deleteMembers: Boolean): Umbrella
    }
`;