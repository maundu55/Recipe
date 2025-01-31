import { useParams } from "react-router-dom"
import { recipes } from '../data'



const RecipeDetails = () => {
    const { id } = useParams();

    const recipe = recipes.find(recipe=> recipe.id === id)
  return (
    <div className="relative">
      <div className="absolute left-0 top-0  h-full w-full bg-black opacity-80" />

      <div className="container flex h-[60vh] flex-col items-start justify-center">
        <div className="z-40 mr-auto max-w-[700px] pt-16 text-white">
          <h2 className="text-500 font-700 md:text-800 mb-1 capitalize leading-[1.2]">
            {recipe.title}
          </h2>
        </div>

        <img
          className="absolute left-0 -z-10 h-full w-full object-cover"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
    </div>
  )
}

export default RecipeDetails