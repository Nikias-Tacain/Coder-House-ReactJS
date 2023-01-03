import { getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { getAllProducts } from './queries/products';

const ProductList = () => {
    const [products, setProducts] = useState( [] );
    useEffect(() => {
        const db = getFirestore();
        getAllProducts(db)
            .then((item) =>{
                setProducts(item)
            })
    }, []);
    const renderProducts = () => {
        products.map(item => {
            <div>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
            </div>
        })
    }
    return(
        <div>
            <h1>hola</h1>
            {renderProducts()}
        </div>
    )
}

export default ProductList;