import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipestore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ maxWidth: 640, margin: '2rem auto' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDelete={() => navigate('/')}
      />
    </div>
  );
};

export default RecipeDetails;
