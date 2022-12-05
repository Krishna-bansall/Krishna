import HeaderLink from './HeaderLink.astro';
import { SITE_TITLE } from '../config';

import React, { useState, useEffect, useRef } from '@astrojs/react'
import BIRDS from './vanta/dist/vanta.birds.min'


function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    Foreground content goes here
  </div>
}

export default HeroSection

// <section id="hero" class="flex md:justify-end justify-center ">
	
// </section>

// <style>
// 	/* header {
// 		margin: 0em 0 2em;
// 	}
// 	h2 {
// 		margin: 0.5em 0;
// 	} */
// </style>



// <script>
//     VANTA.DOTS({
//       el: "#hero",
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.00,
//       minWidth: 200.00,
//       scale: 1.00,
//       scaleMobile: 1.00,
//       color: 0xffffff,
//       color2: 0xffffff,
//       backgroundColor: 0x0,
//       size: 4.80,
//       spacing: 18.00,
//       showLines: false
//     })
// </script>