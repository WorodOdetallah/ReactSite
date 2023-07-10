import {db} from "./firebaseConfig";

import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

const store = collection(db, "products");
class Crud{

  addProduct = (product)=>{

    return addDoc(store, product);

  };
  updateProduct = (id, updatedProduct)=>{

    const product = doc(db, "product", id)
    return updateDoc(product, updatedProduct);

  };

  deleteProduct= (id)=>{
    const product = doc(db, "products", id);
    return deleteDoc(product);
  };

  getAllProduct = ()=>{

    return getDocs(store);

  };

  getProduct = (id)=>{

    const product = doc(db, "products", id)
    return getDoc(product);

  }
  
}

export default new Crud;
