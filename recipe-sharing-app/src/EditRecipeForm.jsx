import { useState } from 'react';
import useRecipeStore from './recipestore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)} style={{ marginRight: 10 }}>
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: 8, width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ display: 'block', marginBottom: 8, width: '100%' }}
      />
      <button type="submit" style={{ marginRight: 8 }}>
        Save
      </button>
      <button type="button" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
