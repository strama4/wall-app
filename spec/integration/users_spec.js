const request = require('request');
const server = require('../../src/index');
const sequelize = require('../../src/db/models/index').sequelize;
const base = 'localhost:3000'

const User = require('../../src/db/models').User;

describe('routes : user', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        })
    })

    describe('GET /login', () => {
        it('should render login page', (done) => {
            request.get(`${base}/login`, (err, res, body) => {
                expect(body).toContain('Log in');
                done();
            });
        });
    });
});