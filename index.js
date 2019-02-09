require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.port || 9000;
server.listen(port, () => console.log('Server on port 9000'))