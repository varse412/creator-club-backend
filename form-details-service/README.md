# Form Details Service

A Node.js Express TypeScript service for managing creator form details with Swagger API documentation.

## Features

- TypeScript with Express.js
- Zod validation
- Swagger API documentation
- CRUD operations for creator forms

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm start
```

## API Documentation

Visit `http://localhost:3000/` or `http://localhost:3000/form` for interactive API documentation.

## Endpoints

- **POST** `/form/register` - Register new creator
- **PUT** `/form/edit/:id` - Edit creator by ID
- **DELETE** `/form/delete/:id` - Delete creator by ID

## Schema

Creator form includes:
- Name
- Instagram handle
- Followers count (range-based)
- Max video views
- Brand deal history