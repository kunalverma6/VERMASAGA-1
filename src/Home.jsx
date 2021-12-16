import React from 'react'
import Common from './Common'
import web from "../src/image/home.jpg"

const Home = () => {
    return (
        <div>
          <Common style={{marginTop:'50px'}}



            name="        This is the HOME page of the VERMASAGA you can check other things by click on the different options" 
            imgsrc={web}

            
            visit="/about"
            btname="about"
          />  
        </div>
    )
}

export default Home
