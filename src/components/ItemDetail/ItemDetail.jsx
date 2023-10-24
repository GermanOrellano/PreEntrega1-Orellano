
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemDetail.css'

const ItemDetail = ({ id, title, price, pic, stock }) => {
    return (
        <article className='card-item'>
            <header className='header-title'>
                <h2 className='title'>{title}</h2>
            </header>
            <picture>
                <img src={pic} alt={title} className='picture' />
            </picture>
            <section className='detail-product'>
                <p className='info'>Precio: ${price}</p>
                <p className='info'>{stock} Unidades disponibles</p>
            </section>
            <section className='count'>
                <ItemCount stock={stock} initial={0} onAdd={(count) => count > 0 ? alert(`Cantidad agregada: ${count}`) : alert('La cantidad debe ser mayor a 0')} />
            </section>
            <footer>
                <Link to={'/'}>
                    <button className='btn-back'>Volver</button>
                </Link>
            </footer>
        </article>
    )
}

export default ItemDetail