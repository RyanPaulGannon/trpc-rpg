import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get('api/cart', (req, res, ctx) => {
    return res()
  })
)

worker.start()
