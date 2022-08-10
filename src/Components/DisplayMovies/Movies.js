import { useSelector } from 'react-redux';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosMovi from '../axiosMovi/axiosConfig'


const Movies = () => {
  const image="https://image.tmdb.org/t/p/w500/"
  const [Movies,setItems]=useState([])

 var [currentPage, setcurrentPage] = useState(1);
    const Next = () => {
      setcurrentPage(++currentPage);
    };
    const Brevious = () => {
      setcurrentPage(--currentPage);
    };
  useEffect(()=>{

    axiosMovi.get(`movie/popular?api_key=cb52f29be3f868a4a71acc192ed7ee75&page=${currentPage}`).then((res)=>{
          console.log(res.data.results)
          setItems(res.data.results)
         
      }).catch((err)=>{
          console.log(err);
      })
  },[currentPage])

 


    
  return (
    <>
    <div className='container' style={{ padding: "100px" }}>
     <div className="row row-cols-1 row-cols-md-2 g-4">
  
       {Movies.map((item)=> {
         return (
           <div className="col" key={item.id}>
             <div className="card">
               <img
                 src={image+item.backdrop_path}
                 style={{ height: "200px" }}
                 className="card-img-top"
                 alt="..."
               />
               <div className="card-body">
                 <h5 className="card-title">{item.title}</h5>
                 <p className="card-text text-danger">{item.overview}</p>
                 <Link to={`/details/${item.id}`} className="btn btn-secondary">Details</Link>
               </div>
             </div>
           </div>
         );
       })}
     </div>
     <div className='d-grid gap-2 row'>
       <button className='btn btn-secondary' type='button' onClick={()=>{Next()}}>Next</button>
       <button className='btn btn-secondary' type='button' onClick={()=>{Brevious()}}>Previous</button>
     </div>
     </div>
   </>

  )
}

export default Movies



