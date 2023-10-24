import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, pic }) => {

    return (
        <article className='card-item'>
            <header className='header-title'>
                <h2 className='title'>{title}</h2>
            </header>
            <picture>
                <img src={pic} alt={title} className='picture' />
            </picture>
            <footer>
                <Link to={`/item/${id}`}>
                    <button className='btn-detail'>Ver detalle</button>
                </Link>
            </footer>
        </article>
    )
}

export default Item