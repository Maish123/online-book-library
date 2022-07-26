import React from "react";
import BookCard from "./BookCard";

function Home(){
    return(
        <div>
            <p>Hi, welcome to e-library. An online platform where we gain knowledge.</p>
            <BookCard bookName=" The in Between" bookThumbnail="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png" bookId=" 5464"/>
        </div>
    )
}

export default Home;