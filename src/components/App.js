// create your App component here
import {useEffect, useState} from "react";

function App() {
    const [fImage, setfImage] = useState(null)
    
    useEffect( () => {
        setTimeout( () =>{

            fetch("https://dog.ceo/api/breeds/image/random")
                .then(res => res.json())
                .then(data => setfImage(data.message))
        })
    }, [])

    return (
        <>
        {!fImage ? <p>Loading...</p> : <img src={fImage} alt="A Random Dog" />}
        </>
    )
}

export default App;