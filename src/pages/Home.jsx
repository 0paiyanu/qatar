import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Services from '../components/Services'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageEight from '../images/imageEight.jpg'
import imageNine from '../images/imageNine.jpg'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <About/>
        <Services wordOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam fugiat temporibus vitae veritatis debitis praesentium commodi" wordTwo="Id similique, dolor excepturi, culpa atque esse mollitia consequuntur quisquam dolore non voluptates! Sed, possimus. " wordThree="Quos praesentium ea illum quia ut rerum nesciunt qui illo sint veniam libero iusto necessitatibus quam ex voluptas ab cumque at" titleOne="Ticketing" titleTwo="Hotel Reservation" titleThree="Tour Guide" imageFour={imageFour} imageFive={imageFive} imageSix={imageSix} title="Our Services" left="fade-down-right" middle="fade-down" right="fade-down-left"/>
        <Services wordOne="Mollitia nihil dolores optio sunt ipsum. Fugit totam aperiam cupiditate qui eius doloremque quos dicta veritatis" wordTwo="Consequuntur, rerum quod minus porro quam corporis sunt in temporibus expedita quia? Sapiente, necessitatibus" wordThree="Reprehenderit fugit aperiam excepturi incidunt error quasi!reprehenderit fugit aperiam excepturi incidunt error quasi!" titleOne="Reviews" titleTwo="Complaints" titleThree="Branches" imageFour={imageSeven} imageFive={imageEight} imageSix={imageNine} left="fade-up-right" middle="fade-up" right="fade-up-left"/>
        <Contact />
    </div>
  )
}

export default Home
