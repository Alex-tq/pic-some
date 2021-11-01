import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
      
        if(!localStorage.getItem('allPhotos')){
            fetch(url)
                .then(res => res.json())
                .then(data => setAllPhotos(data))
        }else{
            setAllPhotos(JSON.parse(localStorage.getItem('allPhotos')))
        }

        if(localStorage.getItem('cartItems')){
            setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(()=>{
        localStorage.setItem('allPhotos', JSON.stringify(allPhotos))
    }, [allPhotos])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}