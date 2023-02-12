import React from 'react';
import Logo from '../Components/Logo';
import Navigation from '../Components/Navigation';

const Blog = () => {
    return (
        <div className='blog-container'>
            <Logo/>
            <Navigation/>

            <h1>Blog</h1>

            <form>
                <input type='text' placeholder='Nom'/>
                <textarea placeholder='Message'></textarea>
                <input type='submit' value='Envoyer'/>
            </form>
            
        </div>
    );
};

export default Blog;