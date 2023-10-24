import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getItemById } from '../../Mock.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [itemD, setItemD] = useState([])

    const {itemId} = useParams()

    useEffect(() => {
        getItemById(itemId) //le pasamos el id obtenido
            .then(response => {
                setItemD(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId])

    return (
        <div className='item-detail-container'>
            <ItemDetail {...itemD} />
        </div>
    )
}

export default ItemDetailContainer