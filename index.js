const { createServer } = require('http')

const port = process.env.NODE_ENV || 3000
const server = createServer((req, res) => {
    res.end('<h1>Holi Github !!</h1>')
})

server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})