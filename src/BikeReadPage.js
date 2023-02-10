import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readone } from './Connect'
export const Reading=()=>  
{
    const {myid}=useParams()
    const[bikevalue,setBikevalue]=useState({})

    const callreading=async()=>
    {
        const temp=await readone(myid)
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
                        Reading Bikevalue
                    </div>
                    <div className="card-body text-dark">
                        <p>{bikevalue.cusName}</p>
                        <p>{bikevalue.cusId}</p>
                        <p>{bikevalue.cusBikeno}</p>
                        <p>{bikevalue.cusContactno}</p>
                        <p>{bikevalue.cusEmail}</p>
                        <p>{bikevalue.cusDateofpurchase}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}