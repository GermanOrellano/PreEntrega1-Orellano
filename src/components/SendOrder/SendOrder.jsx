import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore, Firestore } from 'firebase/firestore'

const SendOrder = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre.length && email.length > 0 ?
            addDoc(orderCollection, order)
                .then(({ id }) => setOrderId(id))
            : alert('Ambos campos deben estar completos')
    }

    const order = {
        nombre,
        email
    }

    const orderCollection = collection(db, 'MiOrden')

    return (
        <>
            <h1>Formulario de compra</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>
            <p>Número de ID: {orderId}</p>
        </>
    )
}

export default SendOrder