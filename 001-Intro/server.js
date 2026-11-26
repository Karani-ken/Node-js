import http from 'node:http' //module

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Hello world!! From node js")
}).listen(8080, () => console.log("server is running on http://localhost:8080"))