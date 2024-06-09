import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(

        {
            "todos":[ ]
        } 
       )
       const fetchData=()=>{
        axios.get("https://dummyjson.com/todos").then(
          (response)=>{
            changeData(response.data)
          }
        ).catch().finally()

       }
       useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 align="center"><u>Add Todo</u></h1><br></br><br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {data.todos.map(
                                    (value,index)=>{
                                        return <tr>
                                    
                                        <td>{value.id}</td>
                                        <td>{value.todo}</td>
                                        <td>{value.completed}</td>
                                        <td>{value.userId}</td>
                                    </tr>

                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll