import React, { useState, useEffect } from 'react';
import './App.css';

import { Recipe } from './types'

function App() {
  const [recipe, setRecipe] = useState<Recipe | {}>({})
  
  useEffect(() => {
   getRandomRecipe()
  }, [])

  const getRandomRecipe = async () => {
    await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(response => setRecipe(response.recipes[0]))
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
