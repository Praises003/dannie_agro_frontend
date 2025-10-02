import React from 'react'
import HeroComponent from '../components/Hero-Section/HeroComponent'
import FeaturesComponent from '../components/Feature-Section/FeaturesComponent'
import ProductsSection from '../components/Product-Section/ProductComponent'
import MlmProgramComponent from '../components/MlmProgram-Section/MlmProgramComponent'
import TestimonialsComponent from '../components/Testimonial-Section/TestimonialsComponent'
import CtaComponent from '../components/CTA-Section/CtaComponent'

const Home = () => {
  return (
    <>
        <HeroComponent />
        <FeaturesComponent />
        <ProductsSection />
        <MlmProgramComponent />
        <TestimonialsComponent />
        <CtaComponent />
    </>
  )
}

export default Home