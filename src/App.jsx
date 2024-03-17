import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useEffect } from 'react';
import Recipes from './components/Recipes/Recipes';
import Cook from './components/Cook/Cook';
import Cooking from './components/Cooking/Cooking';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [recipes, setRecipes] = useState([]);

  const [wantToCooks, setWantToCooks] = useState([]);

  const [currentlyCookings, setCurrentlyCookings] = useState([]);

  const [time, setTime] = useState(0);
  const [calories, setCalorie] = useState(0);

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);



  const handleWantToCook = (wantToCookID) => {
    console.log(wantToCookID);
    let isContain = false;
    for (const wantToCookie of wantToCooks) {
      if (wantToCookie.recipe_id === wantToCookID) {
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      let newWantToCookie;
      for (const recipe of recipes) {
        if (recipe.recipe_id == wantToCookID) {
          newWantToCookie = recipe;
          break;
        }
      }
      const updateWantToCookie = [...wantToCooks, newWantToCookie];
      setWantToCooks(updateWantToCookie);
    }
    else {
      showToastMessage();
    }

  };

  const handlePrepare = (prepareRecipeID) => {
    console.log(prepareRecipeID);
    const updateWantToCookie = wantToCooks.filter(wantToCook => wantToCook.recipe_id != prepareRecipeID);
    const newCurrentlyCooking = wantToCooks.filter(wantToCook => wantToCook.recipe_id == prepareRecipeID);
    const updateCurrentlyCooking = [...currentlyCookings, ...newCurrentlyCooking];
    setWantToCooks(updateWantToCookie);
    let newTime = 0, newCalorie = 0;
    for (const cookings of updateCurrentlyCooking) {
      newTime += cookings.preparing_time;
      newCalorie += cookings.calories;
    }
    setTime(newTime);
    setCalorie(newCalorie);
    setCurrentlyCookings(updateCurrentlyCooking);
  }

  const showToastMessage = () => {
    toast.success("This recipe is already added !", {
      autoClose: 1000
    });
  };

  return (
    <>
      <div className='container mx-auto px-4 space-y-8'>
        <Header></Header>

        {/* Our Recipes Section */}
        <div className='space-y-5'>
          <div className='text-center space-y-5'>
            <h3 className='text-3xl font-extrabold'>Our Recipes</h3>
            <p className='px-16 font-normal'>
            Explore Our Recipes—your go-to for delicious dishes. From simple staples to gourmet delights, find easy-to-follow recipes that bring joy to your table.Unlock the flavors of Our Recipes—where every dish is a culinary adventure waiting to be savored.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            {/* this is for recipes */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1'>
              {
                recipes.map((recipe) => <Recipes key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipes>)
              }
            </div>

            {/* this is for calculation */}
            <div className='flex-1 space-y-4'>

              {/* Want to cook */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Want to cook: {wantToCooks.length}</h2>
                <div>
                  <div className='w-4/5 mx-auto'>
                    <hr />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        wantToCooks.map((wantToCook, index) => <Cook key={wantToCook.recipe_id} wantToCook={wantToCook} index = {index} handlePrepare={handlePrepare}></Cook>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Currently Cooking */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Currently cooking: {currentlyCookings.length}</h2>
                <div>
                  <div className='w-4/5 mx-auto'>
                    <hr />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        currentlyCookings.map((currentlyCooking, index) => <Cooking key={currentlyCooking.recipe_id} currentlyCooking={currentlyCooking} index = {index}></Cooking>)
                      }
                      <tr className='bg-gray-50'>
                        <td></td>
                        <td></td>
                        <td className='font-semibold'>Total Time =  {time} minutes</td>
                        <td className='font-semibold'>Total Calories =  {calories} calories</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
