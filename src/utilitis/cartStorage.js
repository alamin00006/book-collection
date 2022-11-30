const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        // const newQuantity = quantity + 1;
        shoppingCart[id] = quantity;
    }
    else{
        shoppingCart[id] = 1; 
    }
 
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    console.log(id);
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}

   // useEffect(() =>{
    //     const storedCart = getStoredCart();
    //     const savedCart = []
    //     for (const id in storedCart) {
    //      const addedProduct = myProducts3.find(product =>product._id === id)
    //      if(addedProduct){
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //         savedCart.push(addedProduct);
    //      }
         
    //     }
    //     setCarts(savedCart);
    //     }, [myProducts3])