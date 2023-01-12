import { useEffect, useState } from "react"
import { create, list } from "./BikeDetails"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Register } from "./BikeServiceForm"

export const Homepage=()=>
{
    const[temparray,setTemparray]=useState([])
    const[createview,setCreateview]=useState(false)

    const result=()=>
    {
        setTemparray(list)
    }
    useEffect(()=>
    {
        result()
    })
    return(
        <div className="container">
            {(createview)?
            <>
            <Register/>
            <button className="btn btn-outline-secondary" onClick={
                ()=>
                {
                    setCreateview(false);
                }
            }>
                back
            </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={
                ()=>
                {
                    setCreateview(true)
                }
            }>
                Create a new user
            </button>
            <tbale>
                <thead>
                    <tr>
                        <td>Customer Id</td>
                    </tr>
                </thead>
            </tbale>
            </>
            }

        </div>
    )
}