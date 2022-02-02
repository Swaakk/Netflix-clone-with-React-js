import React, { useEffect, useState } from 'react';
import {API_KEY} from "../../constants/constants"
import axios from '../axios';
import "./Banner.css"
 

function Banner(){
    const [movie, setMovie] = useState(1);
    const [description,setDescription] = useState(1);
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[1]);
            setMovie(Response.data.results[1])
        })
    }, [])

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[1]);
            setDescription(Response.data.results[1])
        })
    },[])
    return(
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>{movie.title}</h1>
                <div className='banner-buttons'>    
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>
                    {description.overview}
                   {/* cilis consequatur itaque officia necessitatibus iure totam omnis, ratione saepe corporis voluptas. Temporibus esse vitae dolores quod! Rem sed officia adipisci fuga voluptatem porro nulla nemo ipsum eum? */}
                </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner;
