# iTrackFlow

![iTrackFlow](https://private-user-images.githubusercontent.com/57297760/303095024-9bfd0bbe-de71-421f-b519-9d523a151dd3.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDczOTEzODAsIm5iZiI6MTcwNzM5MTA4MCwicGF0aCI6Ii81NzI5Nzc2MC8zMDMwOTUwMjQtOWJmZDBiYmUtZGU3MS00MjFmLWI1MTktOWQ1MjNhMTUxZGQzLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA4VDExMTgwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNkNzk0MDg4OTg3OGYxYjYzMGQ1Zjg2ZDM1OWVmNmRkNjliZDBiMjI3NWM2YjFhYjAzYTdhYzY4NmYxODM3YTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.vUZhDH9H3C9HJjDL12TBzRbgphXetd5kQ79kX7YVC9Y)

iTrackFlow is a collaborative web tool for musicians, music bands and composers. It allows to manage the production process of a project, from the composition of the songs to the final master. Also, the user is able to create the harmony schema of a song or theme.

## Work in progress

Currently, the project is in a very early stage of development. The main goal is to create a functional and fullstack prototype of the application. In next steps, the application will be improved with new features and a better user experience. The project is open to contributions, so feel free to open an issue or a pull request! 🙌

Current features:

- Landing page (Hero and Product sections)
- Login and register pages
- Project page
  - Context menu
  - Basic project management
- Harmony page
  - Add, delete and edit chords
  - Smart tonal system
- Authentication (supabase)
- Navigation guards

Future features:

- Backend API
  - User management
  - Project management
  - Song management
  - Websockets for real-time collaboration
- Landing page (rest of sections)
- Harmony audio player
- PDF download with the harmony schema
- User profile page

## Tech Stack

- NUXT 3 / Vue 3
- Tailwind CSS
- SCSS
- Vite
- TypeScript
- ESLint
- Prettier
- Pinia
- Vitest + Testing Library
- Docker
- Github Actions

## Setup

Make sure to install the dependencies first:

```bash
npm install
```

Copy the .env.example file and rename it to .env.local. Then, fill the environment variables with your own values.

```
MONGODB_URI=mongodb://localhost:27017/your_db_name
JWT_SECRET=your_secret_key
SUPABASE_URL="https://example.supabase.co"
SUPABASE_KEY="<your_key>"
```

## Setup using Docker

1. Install and run Docker
2. Install and run Mongo Compass

3. Generate the database

```
docker-compose up -d
```

4. Rename .env.example file to .env

5. Install dependencies and run the app

```
npm i
npm run dev
```

## Setup without Docker

1. Install dependencies

```
npm i
```

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
