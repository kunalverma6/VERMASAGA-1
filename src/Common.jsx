import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/image/1img.jpg"
const Common = (props) => {
    return (
        <>
        <section id="header" className='d-flex align-items-center'>
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className='row'>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 lg-order-1 d-flex justify-items-center flex-column">
                    <h1><strong style={{colo:'red'}}>VERMASAGA</strong></h1>
                    <h2>{props.name} {props.yum}</h2>
                    <h2 className='my-3'> We the POWER of web we do work for you</h2>
                    <div className='mt-03'>
                        <NavLink className='btn btn-primary' to={props.visit} 
                        style={{float:'right',margin:'20px',transition:'0.5s',
                        borderRadius:"50px solid red"}}>   {props.btname} </NavLink>
                    </div>

                    <div className='col-lg-6 order-1 order-lg-1 header-img img-fluid' style={{float : 'right'}}>

                    <img src={props.imgsrc} className='img-fluid animated ' alt='Common ing' 
                    style={{textAlign:"center"}} ></img>

                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Common
