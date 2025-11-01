import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { getAllNotes } from './crud.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

app.get('/', async (req, res) => {
  try {
    const notes = await getAllNotes()
    const items = notes.length
      ? notes
          .map(n => {
            const tags = Array.isArray(n.tags) ? n.tags.join(', ') : ''
            return `\n      <div class="note">\n        <div><strong>id:</strong> ${escapeHtml(n.id)}</div>\n        <div><strong>tags:</strong> ${escapeHtml(tags)}</div>\n        <p>${escapeHtml(n.content)}</p>\n      </div>`
          })
          .join('\n')
      : '<p>No notes found</p>'

    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Notes</title>
    <style>
      body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;padding:20px}
      .note{border:1px solid #ddd;padding:10px;margin-bottom:10px;border-radius:4px}
      .note p{margin:8px 0}
    </style>
  </head>
  <body>
    <h1>Notes</h1>
    ${items}
  </body>
</html>`

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(html)
  } catch (err) {
    console.error('Error serving notes:', err)
    res.status(500).send('Internal Server Error')
  }
})

export function startServer(port = 3000) {
  const server = app.listen(port, () => console.log(`Notes server listening on http://localhost:${port}`))
  return server
}

export default app
