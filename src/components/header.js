

//const src1 = '../../assets/images/LOGO.jpg'

import React from "react";
import '../../src/components/header.js';


import { Link } from 'react-router-dom';


function AppHeader() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
           
            
            <ul className="nav-linkss">
                <Link style={navStyle} to='/'>
                    <li>
                        Inicio
                    </li>
                    

                </Link>
                
                <Link style={navStyle} to='/Biografia'>
                    <li>
                        Biografia
                    </li>
                    

                </Link>
                <Link style={navStyle} to='/Contactos'>
                    <li>
                        Contactos De Emergencia
                    </li>
                    

                </Link>
                
            </ul> 
           
        </nav>

    );
  }
  
  
  export default AppHeader;
  