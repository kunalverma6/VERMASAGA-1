import React from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>

    <Navbar /><br></br>
     <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/about" component={About} exact></Route>
       <Route path="/service" component={Service} exact></Route>
       <Route path="/contact" component={Contact} exact></Route>
       <Redirect  to="/" />
     </Switch><br></br>
     <br>kunak</br>
      <Footer />
    </>
  )
}

export default App
