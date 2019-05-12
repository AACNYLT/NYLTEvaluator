module.exports = `
    type Org {
        _id: String!
        name: String!
        umbrellaId: String!
        scouts: [Scout]
        umbrella: Umbrella
    }
    
    type Query {
        org(_id: String!): Org
        orgs: [Org]
    }
    
    type Mutation {
        createOrg(name: String!, umbrellaId: String!): Org
        editOrg(_id: String!, name: String!, umbrellaId: String!): Org
        deleteOrg(_id: String!, deleteMembers: Boolean): Org
    }
`;