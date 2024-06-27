import React from 'react'

function FirstSections() {
  return (
    <section
      className="max-w-[1090px] flex flex-col gap-10 items-stretch justify-between 
    w-full h-full
    px-4  py-4 pt-8 
    "
      id="CABA"
    >
      <p
        className={`tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl text-inter`}
      >
        Si querés que el producto llegue a{' '}
        <span className={`text-my-font text-[#284E37]`}>CABA</span> tenés{' '}
        <span className="underline underline-offset-8 decoration-[#284E37]">
          tres opciones:
        </span>{' '}
      </p>
      <ShipOption />
      <hr className="h-[1px] lg:h-[1.5px]" />
      <PickupOption />
      <hr className="h-[1px] lg:h-[1.5px]" />
      <DirectOption />
      <hr className="h-[1px] lg:h-[1.5px]" id="envios" />
      <InteriorOption />
    </section>
  )
}

export default FirstSections

function ShipOption() {
  return (
    <div className="flex flex-col gap-8 justify-between w-auto">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2
          className="text-my-font text-[#5441A0] tracking-wider 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
        >
          1. Envíos por Correo
        </h2>
        <p
          className={`tracking-wide text-dark text-sm md:text-sm lg:text-lg
          lg:max-w-[900px] text-balance text-inter`}
        >
          Comprá online, colocá el código postal de la localidad donde quieras
          recibir el producto, y elegí la sucursal de correo que te quede más
          cómoda para retirarlo.
        </p>
      </div>
      <p
        className={`tracking-normal font-extrabold
        underline underline-offset-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-inter`}
      >
        Hacemos envíos por correo a todo el país.
      </p>
      <button
        className={`font-bold uppercase text-inter self-start mt-2
            hover:bg-[#B5A9E6] rounded-lg bg-[#D5CFEE] px-4
            transition-colors duration-300 text-dark py-3 md:py-4
            cursor-pointer
      `}
      >
        Entrá a la tienda online
      </button>
    </div>
  )
}

function PickupOption() {
  return (
    <div className="flex flex-col gap-8 justify-between w-auto">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2
          className="text-my-font text-[#5441A0] tracking-wider 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
        >
          2. Puntos de Retiro
        </h2>
        <p
          className={`tracking-wide text-dark text-sm md:text-sm lg:text-lg
          lg:max-w-[900px] text-pretty lg:text-balance text-inter`}
        >
          Comprá en la tienda online y retirá personalmente 72hs hábiles después
          de tu compra. Aprovechá el 10% OFF abonando en efectivo o
          transferencia (solo comprando por la web antes).
        </p>
      </div>
      <div
        className={`tracking-normal
        text-sm md:text-sm lg:text-md text-inter`}
      >
        <span className="font-extrabold uppercase text-my-font">
          <span className="text-lg">💌</span> Importante:{' '}
        </span>
        Una vez realizada la compra te van a llegar{' '}
        <span className="underline underline-offset-2">dos correos:</span>
        <br />
        <p className="mt-2">
          <span className=" font-bold text-[#5441A0]">
            1 de confirmación de compra, 1 de confirmación de retiro.{' '}
          </span>
          Esperá el mensaje de confirmación de retiro antes de acercarte.
        </p>
      </div>

      <div className="flex md:hidden flex-col gap-6 items-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-row">
            📍
            <p className="text-my-font font-extrabold text-xs md:text-sm lg:text-md">
              DOT:{' '}
              <span className="font-normal text-inter">Local CoShowroom</span>
              <br />
              <span className="font-normal text-inter">
                Lunes a Domingos de 10 a 22hs
              </span>
              <br />
              <span className="font-normal text-inter">Demora 48hs</span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-xs md:text-sm lg:text-md">
              RECOLETA: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
                <br />
                <span className="font-normal text-inter">Demora 72hs</span>
              </span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-xs md:text-sm lg:text-md">
              BELGRANO: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
                <br />
                <span className="font-normal text-inter">Demora 72hs</span>
              </span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-xs md:text-sm lg:text-md">
              SAN ISIDRO: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
                <br />
                <span className="font-normal text-inter">Demora 72hs</span>
              </span>
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52569.244120962445!2d-58.47524931625206!3d-34.564244814948815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCOSHOWROOM%20%7C!5e0!3m2!1sen!2sar!4v1719097141111!5m2!1sen!2sar"
          height="250"
          allowFullScreen
          className="w-[100%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="hidden md:flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-col gap-4 justify-center h-[300px]">
          <div className="flex flex-row">
            📍
            <p className="text-my-font font-extrabold text-sm lg:text-md">
              DOT:{' '}
              <span className="font-normal text-inter">Local CoShowroom</span>
              <br />
              <span className="font-normal text-inter">
                Lunes a Domingos de 10 a 22hs
              </span>
              <br />
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-sm lg:text-md">
              RECOLETA: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-sm lg:text-md">
              BELGRANO: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-my-font font-extrabold text-sm lg:text-md">
              SAN ISIDRO: <br />
              <span className="font-normal text-inter">
                <span className="font-normal text-inter">
                  Lunes a Viernes de 11 a 19hs.
                </span>
                <br />
                <span className="font-normal text-inter">
                  Sábados 10 a 17hs.
                </span>
              </span>
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52569.244120962445!2d-58.47524931625206!3d-34.564244814948815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCOSHOWROOM%20%7C!5e0!3m2!1sen!2sar!4v1719097141111!5m2!1sen!2sar"
          height="300"
          allowFullScreen
          className="w-[60%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <button
        className={`font-bold uppercase text-inter self-start mt-2
            hover:bg-[#B5A9E6] rounded-lg bg-[#D5CFEE] px-4
            transition-colors duration-300 text-dark py-3 md:py-4
            cursor-pointer
      `}
      >
        Entrá a la tienda online
      </button>
    </div>
  )
}

function DirectOption() {
  return (
    <div className="flex flex-col gap-8 justify-between w-auto">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h2
          className="text-my-font text-[#5441A0] tracking-wider 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
        >
          3. Compra Directa
        </h2>
        <p
          className={`tracking-wide text-dark text-sm md:text-sm lg:text-lg
          lg:max-w-[900px] text-pretty lg:text-balance text-inter`}
        >
          Acercate a un local, elegí, pagá y llevalo en el momento.
        </p>
      </div>

      <div className="text-inter flex flex-col gap-2">
        <p className="text-sm md:text-sm lg:text-md font-bold text-[#5441A0]">
          Locales disponibles{' '}
        </p>
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-row">
              📍
              <p className="text-my-font font-extrabold text-sm md:text-md">
                DOT:{' '}
                <span className="font-normal text-inter">
                  Vedia 3600 | 1° Piso: Local CoShowroom
                </span>
                <br />
                <span className="font-normal text-inter text-[#5441A0]">
                  Lunes a Domingos de 10 a 22hs
                </span>
                <br />
              </p>
            </div>
            <div className="flex flex-row">
              📍
              <p className="text-my-font font-extrabold text-sm md:text-md">
                COSHOWROOM RECOLETA:{' '}
                <span className="font-normal text-inter">Uruguay 1250 A </span>
                <br />
                <span className="font-normal text-inter text-[#5441A0]">
                  Lunes a Viernes de 11 a 19hs y Sábados de 11 a 17hs
                </span>
                <br />
              </p>
            </div>
            <div className="flex md:hidden flex-col justify-end items-start">
              <p className="text-sm md:text-sm lg:text-md font-bold text-[#5441A0]">
                Métodos de pago{' '}
              </p>
              <p>Efectivo | Tarjetas | Mercado Pago</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-end w-full items-start">
            <p className="text-sm md:text-sm lg:text-md font-bold text-[#5441A0]">
              Métodos de pago{' '}
            </p>
            <p>Efectivo | Tarjetas | Mercado Pago</p>
          </div>
        </div>
      </div>

      <p
        className={`tracking-wide text-dark text-sm lg:text-md
          lg:max-w-[900px]  lg:text-balance text-inter`}
      >
        Que puedas encontrar la experiencia que mejor te quede, y no te olvides
        que: <b>poner en palabras es el primer paso para conectar(nos) :)</b>
      </p>

      <div
        className={`tracking-normal
        text-md md:text-md lg:text-lg text-inter p-4 bg-gray-100 rounded-md`}
      >
        <div className="flex flex-row gap-4 lg:gap-2">
          <p>⚠️</p>

          <p className="font-bold text-inter text-gray-600">
            Las promociones son exclusivas de nuestra{' '}
            <a
              className="text-[#5441A0] underline underline-offset-2"
              href="https://enpalabras.com.ar"
              target="_blank"
            >
              tienda online
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

function InteriorOption() {
  return (
    <div className="flex flex-col gap-8 justify-between w-auto">
      <p
        className={`tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl text-inter`}
      >
        Si querés que el producto llegue a{' '}
        <span className={`text-inter font-extrabold text-[#284E37]`}>
          cualquier parte del país,
        </span>{' '}
        tenemos la opción para vos :){' '}
      </p>

      <div className="flex flex-col gap-2 lg:gap-4">
        <h2
          className="text-my-font text-[#5441A0] tracking-wider 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
        >
          Envíos por correo
        </h2>
        <p
          className={`tracking-wide text-dark text-sm md:text-sm lg:text-lg
            lg:max-w-[900px] text-balance lg:text-balance text-inter`}
        >
          Comprá online, colocá el código postal de la localidad donde quieras
          recibir el producto, y elegí la sucursal de correo que te quede más
          cómoda para retirarlo.
        </p>
      </div>
      <p
        className={`tracking-normal font-extrabold
            underline underline-offset-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-inter`}
      >
        Hacemos envíos por correo a todo el país.
      </p>
      <button
        className={`font-bold uppercase text-inter self-start mt-2
                hover:bg-[#B5A9E6] rounded-lg bg-[#D5CFEE] px-4
                transition-colors duration-300 text-dark py-3 md:py-4
                cursor-pointer
        `}
      >
        Entrá a la tienda online
      </button>
    </div>
  )
}
