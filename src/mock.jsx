const products = [
    { id: '1', title: 'Vino tinto', categoria: 'tintos', description: 'Este es un vino tinto', price: 1500, pic: '/pic-tinto.jpg', stock: 50 },
    { id: '2', title: 'Vino rosado', categoria: 'rosados',description: 'Este es un vino rosado', price: 2000, pic: '/pic-rose.jpg', stock: 30 },
    { id: '3', title: 'Vino blanco', categoria: 'blancos',description: 'Este es un vino blanco', price: 2500, pic: '/pic-blanco.jpg', stock: 25 }
]

export const getItem = ()=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
}

export const getItemById = (productId)=> {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.categoria === productCategory))
        }, 500)
    })
}
