const User = require('../../models/User')
const app = require('../../server') // my express app
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

describe('Users', () => {

    //Before each test we empty the database

    beforeEach((done) => {
        User.removeUsers().then(
            done()
        )
    });

      //actual api test 
    describe('/POST user', () => {
        const user = {
            "email": "user@test.com",
            "name": "test user",
            "password": "test", // only 4 characters
            "address": "the one",
            "education_qualification": "bsc",
            "job_title": "creating",
            "contact_number": 9836789211,
            "dob": "2020-10-20T00:00:00.000Z",
        }
        it('it should\'nt POST the user', (done) => {
            chai.request(app)
                .post('/api/user')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    })

    describe('/POST user', () => {
        const user = {
            "email": "user@test.com",
            "name": "test user",
            "password": "testpassword",
            "address": "the one",
            "education_qualification": "bsc",
            "job_title": "creating",
            "contact_number": 9836789211,
            "dob": "2020-10-20T00:00:00.000Z",
        }
        it('it should POST the user', (done) => {
            chai.request(app)
                .post('/api/user')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })

  //   describe('/POST user', () => {
  //     const user = {
  //         "email": "user@test.com",
  //         "name": "test user",
  //         "password": "testpassword",
  //         "address": "the one",
  //         "education_qualification": "bsc",
  //         "job_title": "creating",
  //         "contact_number": 9836789211,
  //         "dob": "2020-10-20T00:00:00.000Z",
  //     }
  //     it('User already exist, it shouldn\'t create new user', (done) => {
  //         chai.request(app)
  //             .post('/api/user')
  //             .send(user)
  //             .end((err, res) => {
  //                 res.should.have.status(400);
  //                 done();
  //             });
  //     });
  // })

    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(app)
                .get('/api/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    })
})