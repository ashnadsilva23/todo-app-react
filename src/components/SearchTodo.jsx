import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchTodo = () => {
  const[data,setData]=useState(
    {
      "title":""
    }
  )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

  }
  const viewData=()=>
    {
    console.log(data)
    }
  return (
    <div>
      <Navbar/>
         <div className="container">
         <h1 align="center">Search Todo</h1>

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                        </div>
                        
                     
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={viewData}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchTodo