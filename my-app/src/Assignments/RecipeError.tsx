import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipees");
      if (!response.ok) {
        throw new Error("Error occurred while fetching recipes");
      }
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

   if (loading == true) {
    return (
      <div className="container text-center">
        <h1 className="text-danger">Loading... </h1>
      </div>
    );
  }
   if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger fw-bold">{error}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4 text-success">Recipe List</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;