import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            < Link className="nav-link " to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                            < Link className="nav-link " to="/categoria">Categoria</Link>
                            </li>
                            <li className="nav-item">
                            < Link className="nav-link " to="/contacto">contacto</Link>
                            </li>
                            <li className="nav-item">
                            < Link className="nav-link " to="/Registrar">Registrar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>

    )
}

export default Nav