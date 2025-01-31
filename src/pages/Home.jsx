import React from 'react'
import Hero from '../sections/Hero'
import Recipes from '../sections/Recipes'
import Testimonial from '../sections/Testimonial'
import Newsletter from '../components/Newsletter'


const Home = () => {
  return (
// Hero section
<>
<Hero />
<Recipes />
<Testimonial />
<Newsletter />
</>

  )
}

export default Home