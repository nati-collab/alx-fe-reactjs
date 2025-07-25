import useRecipeStore from './recipestore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      if (onDelete) onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: 'red', color: 'white', marginTop: '1rem' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
