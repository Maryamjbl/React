import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  cuisine: string;
  cookTimeMinutes: number;
  image: string;
  ingredients: string[];
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    let data = await response.json();
    setRecipes(data.recipes); 
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="container mb-4">
      <h2 className="text-primary my-4">Recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body">
                <h4 className="text-success mb-2">{recipe.name}</h4>
                <p className="text-secondary">
                  Cuisine: {recipe.cuisine} <br />
                  Cooking Time: {recipe.cookTimeMinutes} mins
                </p>
                  <p>
                <strong>Main Ingredients:</strong>
                <ul className="mb-0">
                  {recipe.ingredients.slice(0, 5).map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;