import React from 'react'
import Common from './Common'
import web from "../src/image/2img.jpg"

function About() {
    return (
        <>

     
            <Common   
            
              name="We are the It company who work for the gud of  your company we design for you and make u grow in your fielf
              `we do work in web 
              `we also do work with android
              `we make animated design for you
              `interactive things' "
             imgsrc={web}
             visit="/service"
             
             btname="click to know more" />
        </>
    )
}

export default About
