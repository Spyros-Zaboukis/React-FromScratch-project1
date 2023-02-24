import React, { useState } from 'react';

const Articles = ({article}) => {
    const [isEdisting, setIsEditing]= useState(false);
    const [editContent, setEditContent]=useState("");


    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleString("fr-FR", {
            year : 'numeric',
            month : 'long',
            day : 'numeric',
            hour : 'numeric',
            minute : 'numeric',
            second : 'numeric',
        })
        return newDate;
    }

    return (
        <div className='article'>
            <div className='card-header'>
                <h3>{article.author}</h3>
                <em>Posté le {dateFormater(article.date)} </em>
            </div>
            {
            isEdisting ? 
                <textarea defaultValue={article.content}></textarea>
                : 
                <p>{article.content}</p>
            }

            <div className='btn-container'>

                {
                    
                }
                <button onClick={()=> setIsEditing(true)}>Edit</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Articles;