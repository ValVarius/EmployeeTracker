import React from 'react'

export default function Navbar(props) {


    if (typeof props.currentPage === 'string'){
    return (
        <nav className="navbar navbar-light bg-light">
         <a className="navbar-brand" href="#Home" onClick={() => props.handlePageChange("")}>Home</a>

         <form className="form">
         <input  //aria-label="Search Name"
            value = {props.currentPage}
         name="currentPage"
         onChange={props.handleInputChange}
         type="text"
         placeholder="Search Name"
         />
        {/* <button onClick={props.handleInputChange}>Submit</button> */}
         </form>
        </nav>
    )
    }
    else {
        return(
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#Home" onClick={() => props.handlePageChange("")}>Home</a>
           </nav> 
        )
    }
}
