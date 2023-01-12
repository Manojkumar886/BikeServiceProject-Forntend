import { useEffect, useState } from "react"
import { list } from "./BikeDetailValues";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Register } from "./BikeServiceForm";

export const Homepage01=()=>
{
    const[temparray,setTemparray]=useState([]);
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
        <>
        <div className="container mt-5">
            {
                (createview)?
                <>
                <Register/>
                <button className="btn btn-outline-secondary" onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }>Back</button>
                </>
                :
                <>
                <button className="btn btn-outline-success" onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                } >
                    Create new bikeDetails
                </button>
                
                </>
            }

        </div>
        </>
    )
}