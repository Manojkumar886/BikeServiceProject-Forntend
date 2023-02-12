import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  readoneservice } from './Connect'
export const Readingservice=()=>  
{
    const {myjobcard}=useParams()
    const[bikevalue,setBikevalue]=useState({})

    const callreading=async()=>
    {
        const temp=await readoneservice(myjobcard)
        setBikevalue(temp.data)
    }
    useEffect(()=>
        {
            callreading()
        },[])
    return(
        <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="card  bg-info col-lg-5 col-md-8 col-sm-12">
                    <div className="card-title text-uppercase">
                        Reading ServiceDetails
                    </div>
                    <div className="card-body text-dark">
                    <p>{bikevalue.bikeJobcardno}</p>
                    <p>{bikevalue.bikeissues}</p>
                    <p>{bikevalue.bikeDateofservice}</p>
                    <p>{bikevalue.bikeKilometer}</p>
                    <p>{bikevalue.bikestatus}</p>
                    <p>{bikevalue.bikeTypeofservice}</p>
                    <p>{bikevalue.bikeEstimatecharge}</p>
                    <p>{bikevalue.bikeNewproductcost}</p>
                    <p>{bikevalue.bikeNewproductcost}</p>
                    <p>{bikevalue.bikeLabourcharge}</p>
                    <p>{bikevalue.bikeFinalpay}</p>         
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}