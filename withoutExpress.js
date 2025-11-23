// Import the built-in Node.js 'http' module
const http = require('http');
const hostname = '127.0.0.1'; // Loopback address, often used for local development
const port = 3000;

const server = http.createServer((req, res) => {
    // Set the HTTP status code to 200 (OK)
    res.statusCode = 200;

    // Set the Content-Type header to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Check if the request is for the root path '/'
    if (req.url === '/') {
        // Send the response body
        res.end('Hello World!\n');
    } else {
        // For any other path, return a 404 Not Found error
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});
server.listen(port, hostname, () => {
    // This callback function runs once the server has successfully started
    console.log(`Server running at http://${hostname}:${port}/`);
});