module.exports = `
    type Org {
        _id: String!
        name: String!
        scouts: [Scout]
    }
    
    type Query {
        org(_id: String!): Org
        orgs: [Org]
    }
    
    type Mutation {
        createOrg(name: String!): Org
        editOrg(_id: String!, name: String!): Org
        deleteOrg(_id: String!, deleteMembers: Boolean): Org
    }
`;