import memesData from '../memesData'
import React from 'react';
import {useState} from 'react'

const Meme = () =>{

    const [meme , setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages , setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
             ...prevMeme,
             randomImage: url
        }));
    }

    return(
       <main>
           <div className='form'>
                <input 
                   type='text' 
                   placeholder='Top Text'
                   className='form-input'
                />
                <input 
                   type='text' 
                   placeholder='Bottom Text'
                   className='form-input'
                />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
           </div>
           <img src={meme.randomImage}  className='meme-image'/>
       </main>
    )

}


export default Meme;