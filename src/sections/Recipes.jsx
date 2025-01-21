import React, { useEffect, useState } from 'react'
import {Search } from 'lucide-react'
import {recipes } from '../data'
import Recipe from '../components/Recipe'
import NotFound from '../assets/not-found.png'

const Recipes = () => {
    const[searchTerm, setSearchTerm] = useState('');
    const [likedRecipes, setLikedRecipes] =useState([]);

const handleChange =(e)=>{
    setSearchTerm(e.target.value)
    // console.log(e)
}

useEffect(()=>{
    const storedLikedRecipes = JSON.parse(localStorage.getItem('likedRecipes') || '[]');

    setLikedRecipes(storedLikedRecipes);
}, [])

const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))

const handleLikedToggle =(recipeId) =>{
    setLikedRecipes((prevLiked) =>{
        let updatedLiked;

        if(prevLiked.includes(recipeId)){
            updatedLiked = prevLiked.filter((id) => id !== recipeId);
        } else{
            updatedLiked =[...prevLiked, recipeId];
        }
        localStorage.setItem('likedRecipes', JSON.stringify(updatedLiked));

        return updatedLiked;
    });
};
  return (
   <section className='mx-auto max-w-6xl px-4 py-8'>
    <div className='md:flex md:justify-between md:w-full md:items-center'>
        <div className='relative mb-4 w-1/2 md:mb-0'>
            <input
            type="text" 
            value={searchTerm}
            onChange={handleChange}
            placeholder='Search recipes...' 
            className='w-full rounded-lg border border-gray-100 p-4 pl-12 focus:outline-none focus:ring-1 focus:ring-primary-400'
            />

            <Search size={20} className='absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400' />
        </div>
        <div>
            <button className="font-500 rounded-lg bg-primary-400 px-4 py-2 text-white">Liked recipes</button>
        </div>
    </div>
   <div>
  {
    filteredRecipes.length === 0? (
        <div>
            <img className='mx-auto size-[400px]' src={NotFound} alt="not found" />
            <p className='text-500 font-600 text-center'>No recipes found</p>
        </div>
    ) : (
        <div className='mt-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
         {
        filteredRecipes.map(recipe =>(
            <Recipe 
            key={recipe.id} 
            recipe={recipe}
            isLiked={likedRecipes.includes(recipe.id)} 
            onToggle={handleLikedToggle} />
        ))
    }
        </div>
    )
  }
   </div>
   </section>
  )
}

export default Recipes