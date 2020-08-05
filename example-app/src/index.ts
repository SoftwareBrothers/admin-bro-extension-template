import express from 'express'
import AdminBro from 'admin-bro'
import { buildRouter } from '@admin-bro/express'

import { feature } from '@admin-bro/extension'

feature()

const PORT = 3000

const run = async () => {
  const app = express()
  const admin = new AdminBro()
  const router = buildRouter(admin)

  app.use(admin.options.rootPath, router)

  admin.watch()

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
}

run()
