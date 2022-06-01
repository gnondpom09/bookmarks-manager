/* eslint-disable no-undef */

import { Response } from 'supertest';

const request = require('supertest');

const baseUrl: string = 'http://localhost:3000/';

test('it should pass', async () => {
  expect(true).toBe(true);
});

describe('Space test suite', () => {
  it('test endpoint photo data from flickr', async () => {
    const response: Response = await request(baseUrl).get('api/test/photo');
    expect(response.statusCode).toBe(200);
  });
});
