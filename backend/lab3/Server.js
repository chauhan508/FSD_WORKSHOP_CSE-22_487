import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello, World!\n');
    res.write('Welcome to my server.\n');
    res.write('This is a simple HTTP server built with Node.js.\n');
    res.end('This is my page');

});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});