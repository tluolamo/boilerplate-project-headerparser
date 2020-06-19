/* eslint-env jest */
const request = require('supertest')
const app = require('../app')

describe('Test Homepage', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('Test Who Am I API', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/api/whoami').set('accept-language', 'en-US,en;q=0.5')
    expect(response.statusCode).toBe(200)
    // {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
    expect(typeof response.body.ipaddress).toBe('string')
    expect(typeof response.body.language).toBe('string')
    expect(typeof response.body.software).toBe('string')
    // console.log(response.body)
  })
})
