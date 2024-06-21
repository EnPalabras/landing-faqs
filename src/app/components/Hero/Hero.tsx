import React from 'react'
import fondo from '@/../public/assets/fondo.jpg'

function Hero() {
  return (
    <div
      className="max-w-[1090px] bg-cover bg-no-repeat w-full aspect-[16/9] 
      md:aspect-[16/9 1/1] lg:aspect-[16/9 1/1] xl:aspect-[16/9]"
      style={{ backgroundImage: `url(${fondo.src})` }}
    >
      <div className="flex flex-col justify-between h-full px-8 py-4 pt-8 sm:pt-16">
        <div className="flex flex-col gap-1 lg:gap-2">
          <h1 className="text-my-font text-[#5441A0] tracking-wide text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase">
            Puntos de Compra o Retiro
          </h1>
          <p
            className={`text-xs sm:text-sm md:text-md lg:text-lg max-w-[300px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[450px] text-inter`}
          >
            Enterate todas las formas en las que podemos llegar hasta vos :)
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <p className={`text-inter text-xs sm:text-sm md:text-md lg:text-lg`}>
            ¿Dónde te encontrás?
          </p>
          <div className="flex flex-col gap-2">
            <button
              className={`text-inter tracking-wider font-bold w-1/2 xl:w-2/5
            text-sm md:text-lg hover:bg-[#a08fe5] rounded-lg bg-[#B5A9E6] uppercase
            transition-colors duration-300 text-dark py-2 sm:py-3 md:py-4`}
            >
              CABA
            </button>
            <button
              className={`text-inter tracking-wider font-bold w-1/2 xl:w-2/5
            text-sm md:text-lg hover:bg-[#a08fe5] rounded-lg bg-[#B5A9E6] uppercase
            transition-colors duration-300 text-dark py-2 sm:py-3 md:py-4`}
            >
              INTERIOR DE ARGENTINA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
