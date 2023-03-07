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

    const handleChange = (event) => {
         const {name , value} = event.target
         setMeme(prevMeme => ({
             ...prevMeme ,
             [name] : value
         }))
    }

    return(
       <main>
           <div className='form'>
                <input 
                   type='text' 
                   placeholder='Top Text'
                   className='form-input'
                   name='topText'
                   value={meme.topText}
                   onChange={handleChange}
                />
                <input 
                   type='text' 
                   placeholder='Bottom Text'
                   className='form-input'
                   name='bottomText'
                   value={meme.bottomText}
                   onChange={handleChange}
                />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
           </div>
           <div className='meme'>
               <img src={meme.randomImage}  className='meme-image'/>
               <h2 className='meme-text top'>{meme.topText}</h2>
               <h2 className='meme-text bottom'>{meme.bottomText}</h2>
           </div>
       </main>
    )

}


export default Meme;