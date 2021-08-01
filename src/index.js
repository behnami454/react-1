import React from 'react'
import ReactDOM  from 'react-dom'
import Close from './close'
import './index.css'


import Footer from './footer'

import Navbar from './navbar'
import New from './newtab'
import Refresh from './refresh'
import Change from './change'


const App = () => {
    return (
        <>
        <div>
            <Navbar />
            <div id="btns">
                <div id="btndiv"><button onClick={Close} id="btnn">Close this Tab</button></div>
                <div id="btndiv"><button onClick={New} id="btnn">new tab</button></div>
                <div id="btndiv"><button onClick={Refresh} id="btnn">refresh the page</button></div>
            </div>
            
            <div id="changes">
                <Change />
            </div>
            
            
            
            <Footer />
        </div>
       
        </>
    )

}
   


ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)