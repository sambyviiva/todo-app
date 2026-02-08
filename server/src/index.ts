import { initApp } from "./app";

require('dotenv').config();

initApp().then((server) => {
  server.listen({ port: Number(process.env.APP_PORT) }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
})