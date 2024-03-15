
const Recipes = ({recipe}) => {
    console.log(recipe);
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="rounded-xl p-4 border-2">
            <div className="rounded-xl">
                <img src={recipe_image}  className="rounded-xl" alt="" />
            </div>
            <div>
                <h2>{recipe_name}</h2>
                <p>{short_description}</p>
            </div>
            <div>
                <hr />
            </div>
            <div>
                <h2>Ingredients : {ingredients.length}</h2>
                <ul>
                    {
                        ingredients.map((ingredient) => <li key={recipe_id}>&#x2022;  {ingredient}</li>)
                    }
                </ul>
            </div>
            <div>
                <hr />
            </div>
            <div className="flex gap-5">
                <div>
                    <p>{preparing_time} minutes</p>
                </div>
                <div>
                    <p>{calories} calories</p>
                </div>
            </div>
            <div>
                <button className="btn  bg-green-500 rounded-full px-6">Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipes;