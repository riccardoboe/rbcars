'use client'

import Image from 'next/image'

import { CustomButton } from '@/components'

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover')

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Your ultimate online destination for car information.
        </h1>
        <p className="hero__subtitle">
          We bring you the latest details and insights on a wide range of
          vehicles. From sedans to SUVs, hybrids to electric vehicles, our
          website is your go-to resource for researching, and exploring various
          car models.
        </p>

        <CustomButton
          title="EXPLORE CARS"
          containerStyles="bg-slate-900 text-white rounded-full mt-10 "
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/herobackground.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero
