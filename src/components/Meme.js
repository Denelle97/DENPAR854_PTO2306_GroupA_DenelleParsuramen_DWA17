import React from "react"  // Importing React to use JSX and React hooks
import "./style.css";      // Importing the CSS file for styling

// Meme component definition
export default function Meme() {
     // State for the meme object, which holds the top text, bottom text, and the meme image URL
    const [meme, setMeme] = React.useState({
        topText: "",                       // Initial value for the top text
        bottomText: "",                    // Initial value for the bottom text
        randomImage: "http://i.imgflip.com/1bij.jpg" // Default meme image
    })
    // State to store the array of all memes fetched from the API
    const [allMemes, setAllMemes] = React.useState([])
    
    // useEffect hook to fetch meme data from the API when the component first renders
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())  // Convert the response to JSON
            .then(data => setAllMemes(data.data.memes)) // Store the memes in the allMemes state
    }, []) // Empty dependency array ensures this runs only once when the component mounts
    
    // Function to randomly select a meme image from the allMemes array
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length) // Generate random index
        const url = allMemes[randomNumber].url  // Get the meme image URL from the random index
        setMeme(prevMeme => ({
            ...prevMeme,   // Keep the existing properties of the meme object
            randomImage: url // Update the randomImage property with the new meme URL
        }))
        
    }
    
    // Function to handle changes in the text inputs (topText and bottomText)
    function handleChange(event) {
        const {name, value} = event.target  // Extract name and value from the event target (input field)
        setMeme(prevMeme => ({
            ...prevMeme,   // Keep the existing properties of the meme object
            [name]: value  // Dynamically update the corresponding text field (topText or bottomText)
        }))
    }
    
    //Form for entering top and bottom text
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} // Update top text when input changes
                /> 
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} // Update bottom text when input changes
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}  // Call getMemeImage function when button is clicked
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}