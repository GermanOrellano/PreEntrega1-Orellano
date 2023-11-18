import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext.jsx'

const ItemDetail = ({ id, title, price, pic, stock }) => {

    const [quantityOnAdd, setQuantityOnAdd] = useState(0)

    const { addToCart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityOnAdd(quantity)

        //creamos el objeto item
        const item = {
            id,
            title,
            price,
            pic,
            quantity
        }

        quantity > 0 ? addToCart(item, quantity) : alert('La cantidad debe ser mayor a 0');

    }

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
                {
                    quantityOnAdd > 0 ? (
                        <button className='btn-finishBuy'>
                            <Link to='/cart' className='finishBuy'>Terminar compra</Link>
                        </button>
                    ) : (
                        <ItemCount stock={stock} initial={0} onAdd={handleOnAdd} />
                    )
                }
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