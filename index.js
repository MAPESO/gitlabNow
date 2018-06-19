const { createServer } = require('http')

const port = process.env.NODE_ENV || 3000
const server = createServer((req, res) => {
    res.end(`
        <h1>Deploy de Now con GitLab CI</h1>
        <p>
            Cuando enviamos un PR, se desencadena el pipeline "deploy_now" (deploy desarrollo)
        </p>
        <p>
            Finalmente al momento de hacer push a branche master, se desencadena el pipeline "deploy_now_production" (deploy production)
        </p>
    `)
})

server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On http://localhost:${port}`)
})