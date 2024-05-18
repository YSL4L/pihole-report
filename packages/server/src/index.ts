import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { fetchPiholeData } from './services/piholeService'

const app = new Hono()

app.get('/', async(c) => {
  const data = await fetchPiholeData() 
  return c.json(data)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})