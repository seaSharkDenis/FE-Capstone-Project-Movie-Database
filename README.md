# Movie Database

A React-based movie search application powered by the OMDb API. Users can search for movies, view search results, and see detailed information about selected movies.

## Features

- Search for movies by title
- View a list of matching movies with posters and years
- Click a movie to see detailed information (plot, cast, ratings, etc.)
- Responsive design using Tailwind CSS
- Loading and error states for better UX

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [OMDb API](https://www.omdbapi.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- OMDb API key (get one for free at [OMDb API](https://www.omdbapi.com/apikey.aspx))

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd movie-database

   ```

2. Install dependencies:

   ```sh
   npm install

   ```

3. Create a .env file in the root of movie-database and add your OMDb API key:

   ```sh
   VITE_OMDB_API_KEY=your_api_key_here

   ```

4. Running the App  
   Start the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http: in your browser.

5. Building for Production

   ```sh
   npm run build

   ```

## Project Structure
```
movie-database/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── services/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── ...
  ├── .env
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  └── ...
```
