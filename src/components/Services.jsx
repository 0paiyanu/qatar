import { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Services = (props) => {

  useEffect(() =>{
    aos.init({
      duration: 2000
    })
  }, [])
  return (
    <div className='container my-5'>
    <h4 className='text-center my-4'>{props.title}</h4>
      <div className='d-flex'>
        <div className="card mx-2" data-aos={props.left}>
          <img src={props.imageFour} className="card-img-top" alt="Services air-craft" style={{ height: "35vh" }}/>
          <div className="card-body">
            <h5 className="card-title">{props.titleOne}</h5>
            <p className="card-text">{props.wordOne}</p>
          </div>
        </div>
        <div className="card mx-2" data-aos={props.middle}>
          <img src={props.imageFive} className="card-img-top" alt="Services air-craft" style={{ height: "35vh" }}/>
          <div className="card-body">
            <h5 className="card-title">{props.titleTwo}</h5>
            <p className="card-text">{props.wordTwo}</p>
          </div>
        </div>
        <div className="card mx-2" data-aos={props.right}>
          <img src={props.imageSix} className="card-img-top" alt="Services air-craft" style={{ height: "35vh" }}/>
          <div className="card-body">
            <h5 className="card-title">{props.titleThree}</h5>
            <p className="card-text">{props.wordThree}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
