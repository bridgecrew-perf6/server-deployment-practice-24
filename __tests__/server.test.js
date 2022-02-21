'use strict';

const server = require('../server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing API server', () => {

test('testing /', async () => {
  const response = await request.get('/');

  console.log(111111,response.text); // Home Route
  console.log(222222,response.send); // undefined

  expect(response.text).toBe('Home Route');
})

it('testing /data', async () => {
  const response = await request.get('/data');

  console.log(111111,response); // huge data
  console.log(222222,response.body); // The object

  expect(typeof response.body).toEqual('object');
})
})
