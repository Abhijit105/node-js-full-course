const http = require('http')

const server = http.createServer((req, res) => {
  // operation
  const date = new Date()
  const currentDate = date.toLocaleDateString()

  // header info
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  // response
  res.write(JSON.stringify({ date: currentDate }))

  // disconnect user
  res.end()
})

server.listen(8080, () => {
  console.log('Server is listening on port 8080')
})
