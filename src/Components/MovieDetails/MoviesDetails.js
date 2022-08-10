import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Row , Col, Card} from 'react-bootstrap'
import axiosMovi from '../axiosMovi/axiosConfig'

const MoviesDetails =  (props)  => {
 
    const image="https://image.tmdb.org/t/p/w500/"
    const params=useParams()
    const [Movie,setProduct]=useState({})
    useEffect(()=>{
      axiosMovi.get(`movie/${params.id}?api_key=cb52f29be3f868a4a71acc192ed7ee75`).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <>
     <div style={{ padding: "100px" }}>
          <div className="card">
          <img
                  src={image+Movie.backdrop_path}
                  style={{ height: "200px" }}
                  className="card-img-top"
                  alt="..."
                />
            <div className="card-body">
            <h5 className="card-title">{Movie.title}</h5>
            <p className="card-text text-dark">{Movie.overview}</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">{Movie.release_date}</small>
            </div>
         </div>
    </div>
   
      </>
  )
}

export default MoviesDetails


