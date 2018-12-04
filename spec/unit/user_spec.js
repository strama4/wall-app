const sequelize = require('../../src/db/models/index').sequelize;
const User = require('../../src/db/models').User;

describe('User', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        })
        .catch((err) => {
            console.log(err);
        })
    })

    describe('#create', () => {
        it('should create a new user', (done) => {
            User.create({
                username: 'Johnny',
                password: '123456'
            })
            .then((user) => {
                expect(user.username).toBe('Johnny');
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
    })
})