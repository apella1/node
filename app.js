const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

// V8 engine is written in C++ 
// V8 enables Node to power desktop applications and web applications
// js is considered an interpreted language but modern js engines no longer just interpret it, they compile it 
// Js is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution  
// ? POSIX
// ? REPL mode
// Node accepts argument from the command line
