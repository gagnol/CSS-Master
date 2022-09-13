import Image from 'next/image'
import React from 'react'
import Mountain from "../img/mountain.png"
import Box1 from "../img/box1.png"
import Box2 from "../img/box2.png"
import Box3 from "../img/box3.png"
import Box4 from "../img/box4.png"
import Nasa from "../img/logo1.png"
import Slider from './Slider'




function Hover() {
 return (

<>
<header>
        <div className="container flex items-center justify-between">
            
            <Image width={100} height={70}  src={Nasa} alt="Nasa"/>
            <ul className='space-x-8 flex items-center font-semibold text-white'>
              
                <li>
                    <a href="#">JOIN NOW</a>
                </li>
            </ul>
        </div>
    </header>
    <div className='intro-section relative'>
        <div className='intro-section-text'>
            <h1 className='text-5xl font-bold mb-4 text-white'  >Explore the Galaxy</h1>
            <p >travel to the new Supernova  </p>
        </div>
        <div className='absolute left-0 flex justify-center bottom-0'>
          <Image width={500} height={250}  src={Mountain} className='mountain' alt="Mountain"/></div>
          <div className="planet">
      <div className="star one"></div>
      <div className="star two"></div>
      <div className="star three"></div>
      <div className="star four"></div>
   
   
   
    </div>
    </div>

    <div className='bottom-section h-screen text-white pt-56'>
    
        <div className='bottom-section-text'>
            <h1 className='text-5xl font-bold mb-4 text-white'>Discover The Universe</h1>
            <p className='text-xl'>Cursus tortor vitae. </p>
        </div>
    
        <div className="container">
            <div className='boxes flex items-center justify-between mt-24'>
                <div className="location-box">
                    <Image width={200} height={200} src={Box1} alt="Box1" loading='lazy'/>
                    <div className='text-xl font-semibold mt-5 mb-2'>Midnight Sky</div>
                    <p className='opacity-60'>Nunc fermentum a placerat lorem. Elit diam nisi.</p>
                </div>
                <div className="location-box">
                    <Image width={200} height={200} src={Box2} alt="Box1" loading='lazy'/>
                    <div className='text-xl font-semibold mt-5 mb-2'>Arabian Nights</div>
                    <p className='opacity-60'>Nunc fermentum a placerat lorem. Elit diam nisi.</p>
                </div>
                <div className="location-box">
                    <Image width={200} height={200} src={Box3} alt="Box1" loading='lazy'/>
                    <div className='text-xl font-semibold mt-5 mb-2'>Milkyway galaxy</div>
                    <p className='opacity-60'>Nunc fermentum a placerat lorem. Elit diam nisi.</p>
                </div>
                <div className="location-box">
                    <Image width={200} height={200} src={Box4} alt="Box1" loading='lazy'/>
                    <div className='text-xl font-semibold mt-5 mb-2'>Nightfire Camping</div>
                    <p className='opacity-60'>Nunc fermentum a placerat lorem. Elit diam nisi.</p>
                </div>
                    </div>
                     
                <h3 className=' items-center text-xl font-semibold'> Sponsors</h3>
        <Slider/>
        </div>
       
    </div>
        
    </>
  )
}

export default Hover

