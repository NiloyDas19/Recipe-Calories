import fireImage from '../../assets/fire.png'
import timeImage from '../../assets/time.png'

const Recipes = ({ recipe, handleWantToCook}) => {
    console.log(recipe);
    const { recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="rounded-xl p-4 border-2 space-y-5">
            <div className="rounded-xl">
                <img src={recipe_image} className="rounded-xl" alt="" />
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">{recipe_name}</h2>
                <p className="font-thin">{short_description}</p>
            </div>
            <div>
                <hr />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Ingredients : {ingredients.length}</h2>
                <ul>
                    {
                        ingredients.map((ingredient) => <li key={recipe_id} className="font-light">&#x2022;  {ingredient}</li>)
                    }
                </ul>
            </div>
            <div>
                <hr />
            </div>
            <div className="space-y-2">
                <div className="flex gap-5">
                    <div className='flex gap-1'>
                        <img src={timeImage} alt="" />
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className='flex gap-1'>
                        <img src={fireImage} alt="" />
                        <p>{calories} calories</p>
                    </div>
                </div>
                <button className="btn  bg-green-500 rounded-full px-6" onClick={() => handleWantToCook(recipe_id)}>Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipes;