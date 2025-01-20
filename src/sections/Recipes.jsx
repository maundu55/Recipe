import React from 'react'
import {Search } from 'lucide-react'
import {recipes } from '../data'
import Recipe from '../components/Recipe'

const Recipes = () => {
  return (
   <section className='mx-auto max-w-6xl px-4 py-8'>
    <div className='md:flex md:justify-between md:w-full md:items-center'>
        <div className='relative mb-4 w-1/2 md:mb-0'>
            <input type="text" placeholder='Search recipes...' className='w-full rounded-lg border border-gray-100 p-4 pl-12 focus:outline-none focus:ring-1 focus:ring-primary-400' />
            <Search size={20} className='absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400' />
        </div>
        <div>
            <button className="font-500 rounded-lg bg-primary-400 px-4 py-2 text-white">All recipes</button>
        </div>
    </div>
    {
        recipes.map(recipe =>(
            <Recipe key={recipe.id} recipe={recipe} />
        ))
    }
   </section>
  )
}

export default Recipes