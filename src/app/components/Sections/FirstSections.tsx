'use client'
import Link from 'next/link'

function FirstSections() {
  return (
    <>
      <h2 className="tracking-wide my-[3rem] lg:my-[4rem]" id="caba">
        Si querés que el producto llegue a{' '}
        <span className="text-my-font text-[#284E37]">CABA</span> tenés{' '}
        <span className="underline underline-offset-8 decoration-[#284E37]">
          tres opciones:
        </span>{' '}
      </h2>
      <div
        className="flex mt-4 flex-col gap-8 justify-between w-auto"
        id="CABA"
      >
        <ShipOption />
        {/* <hr className="h-[1px] lg:h-[1.5px]" /> */}
        <PickupOption />
        {/* <hr className="h-[1px] lg:h-[1.5px]" /> */}
        <DirectOption />
        <hr className="h-[1px] lg:h-[1.5px]" id="envios" />
        <InteriorOption />
      </div>
    </>
  )
}

export default FirstSections

function ShipOption() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="tracking-wider">1. Envíos por Correo</h3>
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Comprá online, colocá el código postal de la localidad donde quieras
          recibir el producto, y elegí la sucursal de correo que te quede más
          cómoda para retirarlo.
        </p>

        {/* <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Comprá online, ingresa tu código postal y recibilo a domicilio o
          retiralo en la sucursal de correo que te quede más cómoda.
        </p> */}
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance font-extrabold 
          underline underline-offset-8"
        >
          Hacemos envíos por correo a todo el país.
        </p>
        <Link
          href="https://enpalabras.com.ar"
          target="_blank"
          className="btn mt-1 w-auto mx-auto "
          role="button"
        >
          <div className="btn-text">Compra en la Tienda Online</div>
          <div className="arrow-wrap">
            <div className="btn-arrow transform">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8H14M14 8L9 3M14 8L9 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

function PickupOption() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="tracking-wider">2. Puntos de Retiro</h3>
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Comprá en la tienda online y retirá personalmente 72hs hábiles después
          de tu compra. Aprovechá el 10% OFF abonando en efectivo o
          transferencia (solo comprando por la web antes).
        </p>
      </div>
      <div
        className="tracking-normal
        text-sm sm:text-sm md:text-md lg:text-lg
        text-justify lg:text-left lg:text-balance
        p-4 bg-gray-200 rounded-md
        "
      >
        <p className="!mb-0">
          <span className="text-lg">💌</span>{' '}
          <span className="uppercase font-extrabold">Importante:</span> Una vez
          realizada la compra te van a llegar{' '}
          <span className="underline underline-offset-2">dos correos:</span>
        </p>
        <ul className="list-disc pl-4 my-2 font-inter font-bold text-[#5441A0]">
          <li>1 de confirmación de compra</li>
          <li>1 de confirmación de retiro</li>
        </ul>
        <p className="mt-2 !mb-0">
          Esperá el mensaje de confirmación de retiro antes de acercarte.
        </p>
      </div>

      <div className="my-4 md:hidden flex flex-col gap-6 items-center">
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="flex flex-row w-full ">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              DOT <br />
              <span className="font-normal font-inter">Local CoShowroom</span>
              <br />
              <span className="font-normal font-inter">
                Lun. a Dom. de 10 a 22hs
              </span>
              <br />
              <span className="font-normal font-inter">Demora 48hs</span>
            </p>
          </div>
          <div className="flex flex-row w-full">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              RECOLETA <br />
              <span className="font-normal font-inter">
                Lun. a Vier. de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
          <div className="flex flex-row w-full">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              BELGRANO <br />
              <span className="font-normal font-inter">
                Lun. a Vier. de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
          <div className="flex flex-row w-full">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              SAN ISIDRO <br />
              <span className="font-normal font-inter">Local CoShowroom</span>
              <br />
              <span className="font-normal font-inter">
                Lun. a Vier. de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
        </div>
        <iframe
          title="Mapa de locales En Palabras"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52569.244120962445!2d-58.47524931625206!3d-34.564244814948815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCOSHOWROOM%20%7C!5e0!3m2!1sen!2sar!4v1719097141111!5m2!1sen!2sar"
          height="300"
          allowFullScreen
          className="w-[100%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="hidden md:flex flex-row my-6 gap-2 items-center">
        <div className="flex flex-col gap-2 justify-between  flex-1 h-[540px]">
          <div className="flex flex-row">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              DOT:{' '}
              <span className="font-normal font-inter">Local CoShowroom</span>
              <br />
              <span className="font-normal font-inter">
                Lunes a Domingos de 10 a 22hs
              </span>
              <br />
              <span className="font-normal font-inter">Demora 48hs</span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              RECOLETA: <br />
              <span className="font-normal font-inter">
                Lunes a Viernes de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              BELGRANO: <br />
              <span className="font-normal font-inter">
                Lunes a Viernes de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
          <div className="flex flex-row ">
            📍
            <p className="text-inter font-extrabold text-sm sm:text-sm md:text-md lg:text-lg">
              SAN ISIDRO: <br />
              <span className="font-normal font-inter">
                Lunes a Viernes de 11 a 19hs.
              </span>
              <br />
              <span className="font-normal font-inter">Sábados 10 a 17hs.</span>
              <br />
              <span className="font-normal font-inter">Demora 72hs</span>
            </p>
          </div>
        </div>

        <iframe
          title="Mapa de locales En Palabras"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52569.244120962445!2d-58.47524931625206!3d-34.564244814948815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCOSHOWROOM%20%7C!5e0!3m2!1sen!2sar!4v1719097141111!5m2!1sen!2sar"
          height="550"
          allowFullScreen
          className="w-[60%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Link
        href="https://enpalabras.com.ar"
        target="_blank"
        className="btn mt-4 w-auto mx-auto 
        "
        role="button"
      >
        <div className="btn-text">Compra en la Tienda Online</div>
        <div className="arrow-wrap">
          <div className="btn-arrow transform">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8H14M14 8L9 3M14 8L9 13"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

function DirectOption() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="tracking-wider">3. Compra Directa</h3>
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Acercate a un local, elegí, pagá y llevalo en el momento.
        </p>
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance font-extrabold text-[#5441A0] !mb-0"
        >
          Locales disponibles{' '}
        </p>

        <div className="font-inter flex flex-col gap-2 mb-1 lg:mb-2">
          <div className="flex flex-row gap-1 justify-between">
            <div
              className="flex flex-col items-start w-full
            text-sm sm:text-sm md:text-md lg:text-lg
            "
            >
              <div className="flex flex-row ">
                📍
                <p className="text-inter font-extrabold ">
                  DOT:{' '}
                  <span className="font-normal font-inter">
                    Vedia 3600 | 1° Piso: Local CoShowroom
                  </span>
                  <br />
                  <span className="font-normal font-inter text-[#5441A0]">
                    Lunes a Domingos de 10 a 22hs
                  </span>
                  <br />
                </p>
              </div>
              <div className="flex flex-row">
                📍
                <p className="text-inter font-extrabold ">
                  COSHOWROOM RECOLETA:{' '}
                  <span className="font-normal font-inter">
                    Uruguay 1250 A{' '}
                  </span>
                  <br />
                  <span className="font-normal font-inter text-[#5441A0]">
                    Lunes a Viernes de 11 a 19hs y Sábados de 11 a 17hs
                  </span>
                  <br />
                </p>
              </div>
              <div className="flex md:hidden flex-col justify-end items-start">
                <p
                  className="tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance font-extrabold text-[#5441A0] !mb-0"
                >
                  Métodos de Pago{' '}
                </p>
                <p>Efectivo | Tarjetas | Mercado Pago</p>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-end w-full items-start">
              <p
                className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance font-extrabold text-[#5441A0] !mb-0"
              >
                Métodos de Pago{' '}
              </p>
              <p>Efectivo | Tarjetas | Mercado Pago</p>
            </div>
          </div>
        </div>

        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Que puedas encontrar la experiencia que mejor te quede, y no te
          olvides que:{' '}
          <b>poner en palabras es el primer paso para conectar(nos) :)</b>
        </p>

        <div
          className="tracking-normal
          text-sm sm:text-md md:text-lg lg:text-xl
          text-justify lg:text-left lg:text-balance
          p-4 bg-gray-200 rounded-md"
        >
          <div className="flex flex-row gap-4 lg:gap-2">
            <span>⚠️</span>

            <p className="font-bold font-inter text-gray-700 !mb-0">
              Las promociones son exclusivas de nuestra{' '}
              <Link
                className="text-[#5441A0] underline underline-offset-2"
                href="https://enpalabras.com.ar"
                target="_blank"
              >
                tienda online
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function InteriorOption() {
  return (
    <div className="flex flex-col mb-8 lg:mb-16" id="interior">
      <p
        className="tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl
          lg:text-left lg:text-balance mb-4"
      >
        Si querés que el producto llegue a{' '}
        <span className="text-inter font-extrabold text-[#5441A0]">
          cualquier parte del país,
        </span>{' '}
        tenemos la opción para vos :){' '}
      </p>

      <div className="flex flex-col gap-2 lg:gap-4 mt-4">
        <h3 className="tracking-wider">Envíos por correo</h3>
        <p
          className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance"
        >
          Comprá online, colocá el código postal de la localidad donde quieras
          recibir el producto, y elegí la sucursal de correo que te quede más
          cómoda para retirarlo.
        </p>
      </div>
      <p
        className="tracking-wide text-md sm:text-lg md:text-xl lg:text-2xl
          text-justify lg:text-left lg:text-balance
          "
      >
        Hacemos envíos por correo
        <span className="font-extrabol"> a todo el país.</span>
      </p>
      <Link
        href="https://enpalabras.com.ar"
        target="_blank"
        className="btn mt-1 w-auto mx-auto "
        role="button"
      >
        <div className="btn-text">Compra en la Tienda Online</div>
        <div className="arrow-wrap">
          <div className="btn-arrow transform">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8H14M14 8L9 3M14 8L9 13"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
