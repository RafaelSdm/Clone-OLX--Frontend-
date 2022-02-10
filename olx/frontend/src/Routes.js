import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {About} from './Pages/About/'
import {Home} from './Pages/Home/'


export default () => {
    return(
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/sobre' element={<About/>}/>

       </Routes>
    )
}