import React from "react"// Importing React library to use JSX and React components
import "./style.css"; // Importing external CSS file for styling the component

// Header component definition
export default function Header() {
    return (
        // Main header element with a class for styling
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                alt="Troll Face image"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}