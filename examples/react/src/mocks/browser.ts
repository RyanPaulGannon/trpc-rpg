import { setupWorker, rest } from 'msw'

export const worker = setupWorker(
  rest.get('api/cart', (req, res, ctx) => {
    return res()
  })
)

worker.start()
