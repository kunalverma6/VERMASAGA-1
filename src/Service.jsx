import React from 'react'
import Card from './Card'
import Sdata from "./Sdata"
const Service = () => {
    return (
        <>
    <div className="my-5">
    <h1 className="text-center">SERVICES WE OFFER </h1>
    </div>
    <div className="container-fluid ">
            <div className="row gy-4 gx-4" style={{display:'inline'}} >
              {
                  Sdata.map((value,index)=>{
                      return(
                          <div>  
                     <Card key={index}
                     imgsrc={value.imgsrc}
                     title={value.title}
                     
                     />

                           </div>
                      )
                  })
              }
            </div>
             </div>
                
    
        </>
    )
}

export default Service
