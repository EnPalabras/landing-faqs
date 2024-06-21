import React from 'react'
import { inter, myFont } from '@/app/layout'

function FirstSections() {
  return (
    <section
      className="max-w-[1090px] flex flex-col gap-12 items-start justify-between 
    w-full h-full
    px-6 lg:px-4 py-4 pt-8 
    "
    >
      <p
        className={`tracking-wide text-sm sm:text-lg md:text-xl lg:text-2xl ${inter.className}`}
      >
        Si querés que el producto llegue a{' '}
        <span className={`${myFont.className} text-[#284E37]`}>CABA</span> tenés{' '}
        <span className="underline underline-offset-8 decoration-[#284E37]">
          tres opciones:
        </span>{' '}
      </p>
      <div className="flex flex-col gap-4 lg:gap-6">
        <h2 className="text-[#5441A0] tracking-wider text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase">
          1. Envíos por correo
        </h2>
        <p
          className={`tracking-wide text-dark text-sm md:text-sm lg:text-lg
          leading-normal lg:max-w-[900px]  ${inter.className}`}
        >
          Comprá online, colocá el código postal de la localidad donde quieras
          recibir el producto, y elegí la sucursal de correo que te quede más
          cómoda para retirarlo.
        </p>
      </div>
      <p
        className={`tracking-normal font-extrabold
        underline underline-offset-8 text-sm sm:text-lg md:text-xl lg:text-2xl ${inter.className}`}
      >
        Hacemos envíos por correo a todo el país.
      </p>
      <button
        className={`font-bold uppercase ${inter.className}
            hover:bg-[#B5A9E6] rounded-lg bg-[#D5CFEE] px-4
            transition-colors duration-300 text-dark py-2 sm:py-3 md:py-4
      `}
      >
        Entrá a la tienda online
      </button>
    </section>
  )
}

export default FirstSections
