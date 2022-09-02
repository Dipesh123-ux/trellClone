import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      
       <Link to="/"><img className="ms-4 me-4 logo" src="https://cdn.trell.co/images/orig/CQuWIY8l6Ss4cFWCAzevRxbv36u02tCc.svg" ></img></Link>

       <Link to="/watch" className="text-white" >Watch videos</Link>

    </div>
  )
}

export default Navbar