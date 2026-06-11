# movieflex-backend

Backend for MovieFlex — a small service that stores and counts movies using Prisma and PostgreSQL.

**Prerequisites**

- Bun (recommended) — https://bun.sh
- PostgreSQL (remote or local)
- Optional: Node.js (if you prefer npm/yarn instead of Bun)

**Quickstart (development)**

1. Install dependencies:

```bash
bun install
```

2. Copy the example env and edit it:

```bash
cp env.example .env
# then open .env and update DATABASE_URL and other values
```

3. Generate the Prisma client:

```bash
bunx --bun  prisma generate
```

4. Apply / create migrations (choose one):

- Create a new migration and apply it (local development):

```bash
bunx --bun  prisma migrate dev --name init
```

- Apply existing migrations (CI / production / when migrations are already present):

```bash
bunx  --bun prisma migrate deploy
```

- Alternatively push schema directly without creating migration files:

```bash
bunx --bun  prisma db push
```

5. (Optional) Open Prisma Studio to inspect data:

```bash
bunx --bun  prisma studio
```

1. Run the server (development):

```bash
bun run dev
```

Or run normally:

```bash
bun start
```

**Notes about Prisma**

- The Prisma schema is located at `prisma/schema.prisma` and is configured to use PostgreSQL.
- The generated client is written to `generated/prisma` (see the Prisma generator block).

**Environment variables**
Create a `.env` file from `env.example` and set:

- `DATABASE_URL` — a PostgreSQL connection string (required)
- `PORT` — optional port for the HTTP server (defaults to `3000` if not set)

Example `env.example` is provided in the project root.

**Common commands summary**

```bash
# install deps
bun install

# generate Prisma client
bunx --bun prisma generate

# create & apply a new migration (dev)
bunx --bun prisma migrate dev --name init

# apply existing migrations (production/CI)
bunx --bun prisma migrate deploy

# push schema without migrations
bunx --bun prisma db push

# open Prisma Studio
bunx --bun prisma studio

# run server (hot reload)
bun run dev
```
