import React, { useState } from "react";
import "../CssCode/Navbar.css"

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);


    return (


       
        <nav className="navbar">
        
          
            <p>Created by one and only / You know everyone's fev-: &nbsp; Yadu </p>
            <p>Baaki khush reh Kabuttar. </p>

       
      </nav>
        
        
    );
}

export default Navbar;