#!/usr/bin/env node

// index.js
const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
}
console.log('your new note', newNote)