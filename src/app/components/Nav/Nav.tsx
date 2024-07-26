import Link from 'next/link'
import Script from 'next/script'

export default function Navbar() {
  return (
    <>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66245c2c8b72c9616045fa9b"
        async
      />
      <Script
        src="https://cdn.prod.website-files.com/66245c2c8b72c9616045fa9b/js/webflow.933736e96.js"
        async
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"
        async
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Flip.min.js"
        async
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"
        async
      />
      <Script id="nav-js">
        {`
          
  // Step 1: Find the element with a class of ".nav" and save it in a variable.
  const nav = document.querySelector('.nav-inner');

  // Step 2: Find the element with a class of ".nav-bg" and save it in a variable.
  const navBg = document.querySelector('.nav-bg');

  // Step 3: Find all elements with a class of ".nav-flip" and save them in a variable.
  const navFlips = document.querySelectorAll('.nav-flip');

  // Step 4: When a user hovers on a nav-flip, get the nav-bg and append it inside of the nav-flip using GSAP Flip.
  navFlips.forEach(navFlip => {
    navFlip.addEventListener('mouseenter', () => {
      const state = Flip.getState(navBg);

      navFlip.appendChild(navBg);

      Flip.from(state, {
        duration: .4,
        ease: 'power4.out'
      });
    });
  });

  // Step 5: Whenever a user navigates off of .nav, return the nav-bg back to its original position nested inside of the .nav.
  nav.addEventListener('mouseleave', () => {
    const state = Flip.getState(navBg);

    nav.appendChild(navBg);

    Flip.from(state, {
      duration: .4,
      ease: 'power4.out'
    });
  });

          `}
      </Script>

      <div
        data-animation="default"
        data-collapse="none"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav w-nav top-0 left-0 right-0 z-50 !fixed  
        !bg-[#F6F5F0] !bg-opacity-100"
      >
        <div className="container">
          <div className="row row-justify-center">
            <div className="col col-lg-8 col-md-10 col-sm-12">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-inner">
                  <div className="nav-flip">
                    <Link
                      className="icon-box cc-nav w-inline-block"
                      aria-label="Home"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="sm-icon cc-nav"
                      >
                        <path
                          d="M2 7.07037C2 6.40166 2.3342 5.7772 2.8906 5.40627L6.8906 2.7396C7.5624 2.29173 8.4376 2.29173 9.1094 2.7396L13.1094 5.40627C13.6658 5.7772 14 6.40166 14 7.07037V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V7.07037Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="nav-flip">
                    <Link href="" className="nav-link w-nav-link">
                      Envios
                    </Link>
                  </div>
                  <div className="nav-flip">
                    <Link
                      href=""
                      aria-current="page"
                      className="nav-link w-nav-link w--current"
                    >
                      Preguntas
                    </Link>
                  </div>
                  <div className="nav-flip">
                    <Link
                      href="https://enpalabras.com.ar"
                      target="_blank"
                      className="nav-link w-nav-link"
                    >
                      Tienda
                    </Link>
                  </div>
                  <div className="nav-flip">
                    <Link
                      href="mailto:admin@enpalabras.com.ar"
                      className="nav-link w-nav-link"
                    >
                      Contacto
                    </Link>
                  </div>
                  <div className="nav-bg" data-flip-id="auto-1"></div>
                </div>
              </nav>
              <div
                className="w-nav-button"
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"
        ></div>
      </div>
    </>
  )
}
