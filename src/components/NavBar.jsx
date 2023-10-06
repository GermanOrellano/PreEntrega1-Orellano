import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="d-flex div-navbar">
                    <a className="navbar-brand" href="#">
                        Wine Store
                    </a>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Categoría 1</button></li>
                            <li><button className="dropdown-item" type="button">Categoría 2</button></li>
                            <li><button className="dropdown-item" type="button">Categoría 3</button></li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default NavBar