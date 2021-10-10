import React, {createContext, useState, useEffect} from 'react'

const Context = createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(()=>{
        
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')  
        .then(response => response.json())
        .then(data => {
            setAllPhotos(data)
        })
        
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
        )
}

export {Context, ContextProvider}