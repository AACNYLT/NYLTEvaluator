const expect = require('expect');

describe('GraphQL Resolver Tests', () => {
    describe('Org', () => {
        it('should find one org with arguments', done => {
            const Org = require('../graphql/resolvers/Org')({
                findOne: args => {
                    expect(args).toBe('some argument');
                    return {
                        exec: callback => {
                            callback(null, 'some result');
                        }
                    };
                }
            }, null, null);
            Org.Query.org(null, 'some argument').then(res => {
                expect(res).toBe('some result');
                done();
            });
        });
        it('should handle any errors that result from finding one org', done => {
            const Org = require('../graphql/resolvers/Org')({
                findOne: args => {
                    expect(args).toBe('some argument');
                    return {
                        exec: callback => {
                            callback('some error', 'some result');
                        }
                    };
                }
            }, null, null);
            Org.Query.org(null, 'some argument').catch(err => {
                expect(err).toBe('some error');
                done();
            });
        });
        it('should find all orgs', done => {
            const Org = require('../graphql/resolvers/Org')({
                find: args => {
                    expect(args).toEqual({});
                    return {
                        populate: () => {
                            return {
                                exec: callback => {
                                    callback(null, ['some result']);
                                }
                            };
                        }
                    };
                }
            }, null, null);
            Org.Query.orgs().then(res => {
                expect(res).toEqual(['some result']);
                done();
            });
        });
        it('should handle any errors that result from finding all orgs', done => {
            const Org = require('../graphql/resolvers/Org')({
                find: args => {
                    expect(args).toEqual({});
                    return {
                        populate: () => {
                            return {
                                exec: callback => {
                                    callback('some error', ['some result']);
                                }
                            };
                        }
                    };
                }
            }, null, null);
            Org.Query.orgs().catch(err => {
                expect(err).toEqual('some error');
                done();
            });
        });
        it('should create an org with the given params', done => {
            const OrgResolver = require('../graphql/resolvers/Org')(function Org(args) {
                expect(args.name).toBe('some name');
                expect(args.umbrellaId).toBe('some umbrella id');
                this.args = args;
                this.save = callback => {
                    callback(null, 'some result');
                };
            }, null, null);
            OrgResolver.Mutation.createOrg(null, {name: 'some name', umbrellaId: 'some umbrella id'}).then(res => {
                expect(res).toBe('some result');
                done();
            });
        });
        it('should handle any org creation errors', done => {
            const OrgResolver = require('../graphql/resolvers/Org')(function Org(args) {
                expect(args.name).toBe('some name');
                expect(args.umbrellaId).toBe('some umbrella id');
                this.args = args;
                this.save = callback => {
                    callback('some error', 'some result');
                };
            }, null, null);
            OrgResolver.Mutation.createOrg(null, {name: 'some name', umbrellaId: 'some umbrella id'}).catch(err => {
                expect(err).toBe('some error');
                done();
            });
        });
    });
});