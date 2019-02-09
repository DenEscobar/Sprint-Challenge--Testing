const request = require('supertest');
const server = require('./server.js')


//post  //games
//[ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a 422 status code.
//[ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

describe('the route handlers', () =>{
    describe('get /', () =>{
        it('responds with 200', async ()=>{
            const response = await request(server).get('/games');
            expect(response.status).toBe(200)
        })
        it('responds with json', async () =>{
            const response = await request(server).get('/games');
            expect(response.type).toMatch(/json/i)
        })
        it('returns an array', async () =>{
            const expected = []
            const response = await request(server).get('/games');
            expect(response.body).toMatchObject(expected)
        })
    })

    describe('post /', () =>{
        it('responds with 201 when body is correct', async () =>{
            const body={
                name: 'Fallout New Vegas',
                genre: 'Action role-playing'
            }
            const response = await request(server).post('/games');
            expect(response.status).toBe(201)
        })
        it('responds with 422 when the body is missing data', async () =>{
            const body={
                name: 'Fallout New Vegas'
            }
            const response = await request(server).post('/games');
            expect(response.status).toBe(422)
        })
        it('responds with json', async () =>{
            const body={
                name: 'Fallout New Vegas',
                genre: 'Action role-playing'
            }
            const response = await request(server).post('/games');
            expect(response.type).toMatch(/json/i)
        })
    })
})
