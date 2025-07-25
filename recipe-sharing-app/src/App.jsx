import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <main style={{ maxWidth: 640, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Recipe Sharing App
        </Link>
      </h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}

export default App;
