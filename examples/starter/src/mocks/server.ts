// mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Set up a mock server with the given request handlers
export const server = setupServer(...handlers)

server.listen()
