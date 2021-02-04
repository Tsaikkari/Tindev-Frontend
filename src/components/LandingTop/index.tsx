import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import welcome from '../../media/landing-img-1.svg'
import './LandingTop.scss'

const LandingTop = () => {
  const scrollIn = useSpring({
    to: { marginTop: '0px' },
    from: { marginTop: '-500px' },
    delay: 1500,
    config: { duration: 1000 },
    reset: true,
  })

  const showIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000,
    config: { duration: 2000 },
  })

  return (
    <div className="landing-top-bg px-3">
      <div className="card mx-auto bg-transparent border-0">
        <div className="row m-auto">
          <div className="col-md-8 align-items-center d-flex justify-content-center">
            <div className="card-body">
              <h1 className="heading">Tindev</h1>
              <animated.h2 style={scrollIn} className="card-title">
                Connection between companies and applicants
              </animated.h2>

              <animated.p style={showIn} className="card-text">
                Get your real match without hatch.
              </animated.p>
              <animated.div style={showIn} className="pt-1">
                <Link
                  to="/register"
                  className="land-btn btn btn-outline-light btn-lg mr-4 w-25 py-2 p-0" // width & padding is improvised to avoid text breakage in btn.
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="land-btn btn btn-outline-light btn-lg w-25"
                >
                  Login
                </Link>
              </animated.div>
            </div>
          </div>

          <div className="col-md-4 mx-auto hide-md">
            <img src={welcome} alt="landing-img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingTop
