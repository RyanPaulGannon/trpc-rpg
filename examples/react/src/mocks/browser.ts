import { setupWorker, rest } from 'msw'

export const worker = setupWorker(
  rest.get('/api/cart', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: 1,
            title: 'test',
          },
        ],
      })
    )
  })
)
