import React from 'react'


const Card = (props) => {
    return (
        <>

 
                <div className="col-10 mx-auto">
                    <div className="col-md-4 col-10 mx-auto">
                        
                    <div className="card" style={{ width:" 18rem;"}}>
                   <img src={props.imgsrc} className="card-img-top" alt="hello" />
                    <div className="card-body">
                   <h5 className="card-title" style={{color:'red'}}>{props.title}</h5>
                   <p className="card-text">Some quick example 
                   text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                          </div>
                          </div>
                          </div>
                          
                        
        </>
    )
}

export default Card
