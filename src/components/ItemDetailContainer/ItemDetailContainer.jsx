import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    /* const [itemD, setItemD] = useState([])

    const { itemId } = useParams()*/

    /*
         return (
             <div className='item-detail-container'>
                 <ItemDetail {...itemD} />
             </div>
         ) */

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const oneProduct = doc(db, 'vinos', `${itemId}`)

        getDoc(oneProduct)
            .then((snapshot) => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data }
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className='item-detail-container'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer