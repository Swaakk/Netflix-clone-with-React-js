import React,{useEffect,useState} from 'react';
import {API_KEY,imageUrl} from "../../constants/constants"

import "./RowPost.css"
import axios from "../axios"

function RowPost(props){
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(Response=>{
            console.log(Response.data);
            setMovies(Response.data.results)
        })
    },[])
    return(
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img className='poster' src={`${imageUrl + obj.backdrop_path}`} />
                )}
            </div>
        </div>
    )
}

export default RowPost;
