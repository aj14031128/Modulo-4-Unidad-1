import React from 'react';

import NavLink from "./NavLink";


const Nav=(props)=>{
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/proyectos">Proyectos</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                 </ul>
             </div>
         </nav>
        );
    }
    export default Nav;