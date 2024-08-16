import React from 'react'
import imageTen from '../images/imageTen.jpg'

const About = () => {
  return (
    <div className='about-overall-container'>
    <h2 className='text-center pt-5'>About Us</h2>
        <div className='about-container d-flex mx-auto my-5 py-5'>
            <div className='m-2' data-aos="zoom-in">
                <img src={imageTen} alt="about-us" />
            </div>
            <div className='about-text-container m-2'>
                <h4>What we are about</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nobis possimus eius alias distinctio aliquam eaque minima dignissimos sequi enim corporis deleniti sapiente aut exercitationem doloribus cum quis harum provident?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nobis possimus eius alias distinctio aliquam eaque minima dignissimos sequi enim corporis deleniti sapiente aut exercitationem doloribus cum quis harum provident?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, nobis possimus eius alias distinctio aliquam eaque minima dignissimos sequi enim corporis deleniti sapiente aut exercitationem doloribus cum quis harum provident?
                </p>
            </div>
        </div>
    </div>
  )
}

export default About