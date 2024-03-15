import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { useEffect } from 'react';
import Recipes from './components/Reciepes/Recipes';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data));
  },[]);


  return (
    <>
      <div className='container mx-auto px-4 space-y-8'>
        <Header></Header>

        {/* Our Recipes Section */}
        <div>
          <div className='text-center space-y-5'>
            <h3 className='text-3xl font-extrabold'>Our Recipes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br></br>Eget urna volutpat curabitur elementum mauris aenean neque.
            </p>
          </div>
          <div className='flex'>
            {/* this is for recipes */}
            <div className='grid grid-cols-2 gap-2 flex-1'>
                {
                    recipes.map((recipe) => <Recipes key={recipe.id} recipe = {recipe}></Recipes>)
                }
            </div>

            {/* this is for calculation */}
            <div className='flex-1'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
