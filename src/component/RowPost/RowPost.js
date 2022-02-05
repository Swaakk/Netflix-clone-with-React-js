import React,{useEffect,useState} from 'react';
import {imageUrl} from "../../constants/constants"
import "./RowPost.css"
import axios from "../axios"

function RowPost(props){
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(props.url).then(Response=>{
            console.log(Response.data);
            setMovies(Response.data.results)
        })
    },[])
    const handleMovie=(id)=>{
        console.log(id);

    }
        return(
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className='poster' src={`${imageUrl + obj.backdrop_path}`} />
                )}
            </div>
        </div>
    )
}

export default RowPost;
