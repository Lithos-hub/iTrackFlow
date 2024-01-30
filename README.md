# iTrackFlow

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

## Development Server

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
