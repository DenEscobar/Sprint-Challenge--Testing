

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
})
//GET /games

//[ ] The GET /games endpoint should return the list of games and HTTP status code 200.
//[ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.