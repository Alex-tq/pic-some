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

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
        )
}

export {Context, ContextProvider}