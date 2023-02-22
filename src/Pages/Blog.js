import React, { useEffect, useState } from 'react';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';
import axios from 'axios';

const Blog = () => {

    const [content , setContent] = useState("");
    const [error , setError] = useState(false);

    const getData = ()=> {
        axios.get("http://loclhost=3004/articles")
        .then((res)=> console.log(res));
    }  
    
    useEffect(()=>{
        getData();
    }, [] );

   const handleSubmit = (e) => {
    e.preventDefault();
    if(content.length < 140 ){
        setError(true);
    }else{
        setError(false);
    }
   }

    return (
        <div className='blog-container'>
            <Logo/>
            <Navigation/>

            <h1>Blog</h1>

            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type='text' placeholder='Nom'/>
                <textarea placeholder='Message' 
                    onChangeCapture={(e) => setContent(e.target.value)}
                    style={{ border : error ? "1px solid red" : "1px solid black" }}>

                </textarea>
                { error && <p>Erreur, vous devez écrire un minimum de 140 caractères</p> }
                <input type='submit' value='Envoyer'/>
            </form>
            <ul>  </ul>
            
        </div>
    );
}; 

export default Blog;