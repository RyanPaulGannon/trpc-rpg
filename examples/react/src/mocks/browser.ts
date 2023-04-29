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
  }),
  rest.post('/api/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true')
    return res(ctx.status(200))
  })
)
