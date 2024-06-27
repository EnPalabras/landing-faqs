import React from 'react'
import fondo from '@/../public/assets/fondo.jpg'

function Hero() {
  return (
    // <div
    //   className="max-w-[1090px] bg-cover bg-no-repeat w-full aspect-[16/9]
    //   md:aspect-[16/9 1/1] lg:aspect-[16/9 1/1] xl:aspect-[16/9]
    //   "
    //   style={{ backgroundImage: `url(${fondo.src})` }}
    // >

    <div
      className="bg-cover w-full bg-bottom aspect-[14/9] xl:h-dvh border bottom-1"
      style={{ backgroundImage: `url(${fondo.src})` }}
    >
      <div className="max-w-[1090px] mx-auto  flex flex-col justify-between h-full px-4 md:px-8 py-4 pt-8 sm:pt-16">
        <div className="flex flex-col gap-1 lg:gap-2">
          <h1
            className="text-my-font text-[#5441A0] tracking-wide 
          text-xl sm:text-3xl md:text-4xl lg:text-6xl uppercase
        md:pt-8 xl:pt-12
          "
          >
            Puntos de Compra
            <br className="hidden md:inline lg:inline xl:inline" />y Retiro
          </h1>
          <p
            className={`text-sm sm:text-md md:text-lg lg:text-2xl 
            max-w-[250px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[450px] 
            text-inter`}
          >
            Enterate todas las formas en las que podemos llegar hasta vos :)
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 lg:pb-6">
          <p className={`text-inter text-xs sm:text-sm md:text-md lg:text-lg`}>
            ¿Dónde te encontrás?
          </p>
          <div className="flex flex-col gap-2">
            <a href="#CABA">
              <button
                className={`text-inter tracking-wider font-bold self-start w-1/2 md:w-1/3
            text-sm md:text-lg hover:bg-[#a08fe5] rounded-lg bg-[#B5A9E6] uppercase
            transition-colors duration-300 text-dark py-2 sm:py-3 md:py-4`}
              >
                CABA
              </button>
            </a>
            <a href="#envios">
              <button
                className={`text-inter tracking-wider font-bold self-start w-1/2 md:w-1/3
            text-sm md:text-lg hover:bg-[#a08fe5] rounded-lg bg-[#B5A9E6] uppercase
            transition-colors duration-300 text-dark py-2 sm:py-3 md:py-4`}
              >
                INTERIOR
                {/* INTERIOR DE ARGENTINA */}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
