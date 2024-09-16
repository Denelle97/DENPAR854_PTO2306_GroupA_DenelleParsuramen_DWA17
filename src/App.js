import React from "react" // Importing React to use JSX and React components
import Header from "./components/Header" // Importing the Header component

import Meme from "./components/Meme" // Importing the Meme component

// Main App component definition
export default function App() {
    return (
        // Wrapping all content inside a div container
        <div>
            <Header />
            <Meme />
        </div>
    )
}