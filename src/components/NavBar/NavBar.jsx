import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="d-flex div-navbar">
                    <Link className='navbar-link' to={'/'}>
                        <h2 className="navbar-brand" href="#">Wine Store</h2>
                    </Link>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </button>
                        <ul className="dropdown-menu">
                            <NavLink to={`/category/${'tinto'}`}><button className="dropdown-item" type="button">Vinos tintos</button></NavLink>
                            <NavLink to={`/category/${'rosado'}`}><button className="dropdown-item" type="button">Vinos rosados</button></NavLink>
                            <NavLink to={`/category/${'blanco'}`}><button className="dropdown-item" type="button">Vinos blancos</button></NavLink>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default NavBar