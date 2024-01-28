# Schools API Code Sample

A sample API to retrieve information about New Zealand schools, sourced from
the [Schools Directory](https://catalogue.data.govt.nz/dataset/directory-of-educational-institutions/resource/4b292323-9fcc-41f8-814b-3c7b19cf14b3)
on [data.govt.nz](https://data.govt.nz).

## Requirements

[pnpm](https://pnpm.js.org/) is my Node.js package manager of choice, and is
the only requirement to run this. If you don't want to use this, but have `npm`
installed, you can prefix all `pnpm` commands with `npx`, e.g.
`npx pnpm install` - this will run `pnpm` via `npm`.

## Getting Started

1. Clone the repo locally
2. Copy `.env.example` to `.env`
3. Run `pnpm install`
4. Run `pnpm run start`
5. Visit [http://localhost:3000/swagger#/](http://localhost:3000/swagger#/) in
  your browser to view the Swagger UI

## Design Choices

- **This is a code sample.** It contains design choices I would like to
  showcase, not necessarily the exact choices I would make for any given
  project - that would depend on other factors.

- I've split the codebase into a few Nest.js modules to break up different
  responsibilities. This is how I like to structure my Nest.js projects.

- I've also split larger modules into three layers - application, domain, and
  infrastructure. These further break up the responsibilities within a module
  into application (HTTP), domain (core logic), and persistence (in this case,
  SQLite) concerns. I like to structure most projects with layers such as these.

- I've skipped an ORM, as a demonstration of how I might approach more complex
  projects. I find ORMs can mix up domain logic and persistence logic, and only
  use them in certain use cases, such as simple CRUD apps.

- I opted to use SQLite as a database, as there is one table with a minimal
  amount of data, and this makes the project very easy to run.

- Since no database is required, I also opted to keep the project runnable with
  just Node.js/PNPM, rather than requiring docker. A docker setup would be
  trivial anyway.

- Tests have been skipped. Nothing is particularly complex here, and tests would
  only be verifying trivial things that are mostly verified by TypeScript
  already.
