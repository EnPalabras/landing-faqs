import fondo2 from '@/../public/assets/fondo4.jpg'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className="mt-[6rem] w-full container  min-h-[380px] h-[45vh] sm:h-[90vh]">
        <Image
          src={fondo2.src}
          alt="Productos y Juegos de En Palabras"
          // width={1920}
          // height={1080}
          // sizes="(max-width: 1920px) 100vw, 1920px"
          // style={{ objectFit: 'cover' }}
          quality={100}
          style={{
            borderRadius: '2rem',
          }}
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="rounded-3xl container"
          priority
        />
        {/* <div
          className="  bg-cover bg-right  "
          style={{ backgroundImage: `url(${fondo2.src})` }}
          title="Productos y Juegos de En Palabras"
        > */}
        <div
          className="relative rounded-3xl md:!rounded-r-none md:rounded-l-3xl w-full 
        md:w-1/2 h-full bg-black bg-opacity-35 
        p-4 py-6 md:p-8"
          style={{
            borderRadius: '2rem',
          }}
        >
          <div
            className="flex flex-col justify-between md:gap-2
            w-full h-full"
          >
            <div className="">
              <h1 className="text-left">
                Puntos de <br />
                Compra y Retiro
              </h1>
              <p className="text-[#F6F5F0] text-left text-md sm:text-lg md:text-xl lg:text-2xl">
                Enterate todas las formas en las que podemos
                <br className="hidden xl:block" /> llegar hasta vos 🙂
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#F6F5F0] text-left text-md sm:text-lg md:text-xl lg:text-2xl">
                ¿Dónde te encontrás?
              </p>
              <a href="#caba" className="btn">
                <div className="btn-text">CABA y GBA</div>
                <div className="arrow-wrap">
                  <div className="btn-arrow transform rotate-90">
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
              </a>

              <a href="#interior" className="btn">
                <div className="btn-text">Interior del Pais</div>
                <div className="arrow-wrap">
                  <div className="btn-arrow transform rotate-90">
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
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <div className="mt-[6rem] container">
        <div
          className="w-full min-h-[380px] h-[45vh] sm:h-[90vh] bg-cover bg-right rounded-3xl shadow-lg"
          style={{ backgroundImage: `url(${fondo2.src})` }}
          title="Productos y Juegos de En Palabras"
        >
          <div className="rounded-3xl md:rounded-r-none md:rounded-l-3xl w-full md:w-1/2 h-full bg-black bg-opacity-45">
            <div
              className="flex flex-col justify-between md:gap-2
            w-full h-full p-4 py-6 md:p-8"
            >
              <div>
                <h1 className="text-left">
                  Puntos de <br />
                  Compra y Retiro
                </h1>
                <p className="text-[#F6F5F0] text-left text-md sm:text-lg md:text-xl lg:text-2xl">
                  Enterate todas las formas en las que podemos llegar hasta vos
                  🙂
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#F6F5F0] text-left text-md sm:text-lg md:text-xl lg:text-2xl">
                  ¿Dónde te encontrás?
                </p>
                <a href="#caba" className="btn">
                  <div className="btn-text">CABA y GBA</div>
                  <div className="arrow-wrap">
                    <div className="btn-arrow transform rotate-90">
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
                </a>

                <a href="#interior" className="btn">
                  <div className="btn-text">Interior del Pais</div>
                  <div className="arrow-wrap">
                    <div className="btn-arrow transform rotate-90">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Hero
