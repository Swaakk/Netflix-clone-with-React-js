import React from 'react';
import "./Banner.css"


function Banner(){
    return(
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>    
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>
                   cilis consequatur itaque officia necessitatibus iure totam omnis, ratione saepe corporis voluptas. Temporibus esse vitae dolores quod! Rem sed officia adipisci fuga voluptatem porro nulla nemo ipsum eum?
                </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner;
