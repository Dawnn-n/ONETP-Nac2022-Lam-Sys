const path = require('path')

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
})

// async function dbConn (fastify, options) {
//   fastify.get('/', async (request, reply) => {
//   })
// }
// fastify.register(dbConn)
// fastify.after(err => console.log(err))

async function routes (fastify, res) {
  fastify.get('/', async (request, reply) => {
    res.sendFile('index.html')
  })
}
fastify.register(routes)
fastify.after(err => console.log(err))
module.exports=routes

const start = async () => {
    try {
      await fastify.listen({ port: 80 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
}
start()

// module.exports = {
//   // dbConn,
//   routes,
// }