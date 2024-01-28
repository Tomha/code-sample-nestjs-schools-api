# Schools API

A sample API to retrieve information about New Zealand schools, sourced from
the [Schools Directory](https://catalogue.data.govt.nz/dataset/directory-of-educational-institutions/resource/4b292323-9fcc-41f8-814b-3c7b19cf14b3)
on [data.govt.nz](https://data.govt.nz).

## Requirements

[pnpm](https://pnpm.js.org/) is my Node.js package manager of choice, and is
the only requirement to run this.

A docker config, node server, docker config, etc. was intentionally left out as
this is trivial to setup, and I wanted to keep this as simple as possible.

## Getting Started

1. Clone the repo locally
2. Copy `.env.example` to `.env`
3. Run `pnpm install`
4. Run `pnpm run start`
5. Visit [http://localhost:3000/swagger#/](http://localhost:3000/swagger#/) in
  your browser to view the Swagger UI
