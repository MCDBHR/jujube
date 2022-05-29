const request = require('supertest');
// const app = require('../server/index.js');

describe('Server', () => {


  it('gets the test endpoint', (done) => {
    request(app)
      .get('/products')
      .expect(200)
      .end((err) => {
        if (err) { return done(err); }
        done();
      });
  });
});

