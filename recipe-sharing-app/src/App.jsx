import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <main>
      <h1>
        <Link to="/">Recipe Sharing App</Link>
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
