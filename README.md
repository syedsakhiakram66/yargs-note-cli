# yargs-note-cli
A note app built with yargs and node.js

## About
This command-line note-taking application is built using [Yargs](https://yargs.js.org/), a powerful Node.js library for building interactive command line tools. Yargs helps us create a user-friendly CLI interface with commands, options, and helpful documentation.

## Getting Started

To use this CLI tool, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Link the package to use it globally:
    ```bash
    npm link
    ```

After completing these steps, you can use the `note` command in your terminal anywhere.

## Commands

Below are the commands provided by this CLI and what they do. Replace `note` with the globally linked command after running `npm link`.

- `note new <note>` — Create a new note.
   - Description: Creates a new note with a numeric `id` and the provided note content.
   - Options: `-t, --tags` to attach comma-separated tags to the note.
   - Example:
      ```bash
      note new "Buy milk" --tags groceries
      ```

- `note all` — List all saved notes.
   - Example:
      ```bash
      note all
      ```

- `note find <filter>` — Search notes by a text filter applied to note content.
   - Example:
      ```bash
      note find milk
      ```

- `note remove <id>` — Remove a note by its numeric id.
   - Example:
      ```bash
      note remove 1627384930000
      ```

- `note web [port]` — Launch a small web UI to view notes.
   - Default port: `5000` if none provided.
   - Example:
      ```bash
      note web 3000
      ```

- `note clean` — Remove all notes (destructive).
   - Example:
      ```bash
      note clean
      ```

These commands are implemented using Yargs to provide a friendly CLI interface.

## Acknowledgments
This README was created with the assistance of GitHub Copilot, enhancing the documentation process.
