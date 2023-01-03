import { collection, getDocs } from "firebase/firestore";

const product_collection = 'Productos';

export const getAllProducts = (db) => {
    const collectionRef = collection(db, product_collection);
    return getDocs(collectionRef)
        .then((snapshot) => {
            const Productos = [];
            snapshot.docs.forEach((item) => {
                Productos.push({
                    id: item.id,
                    ...item.data()
                })
            })
            return Productos;
        })
        .catch((error) => {
            return error
        })
}

export const getProductById = (db) => {

}

export const createProductById = (db) => {

}

export const deleteProductById = (db) => {
    
}