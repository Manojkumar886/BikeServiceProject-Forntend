import { useEffect, useState } from "react"
import { FetchExact, list, remove } from "./BikeDetailValues";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Register } from "./BikeServiceForm";
import { Reading } from "./BikeReadPage";
import { Updating } from "./BikeUpdatePage";

export const Homepage01=()=>
{
    const[temparray,setTemparray]=useState([]);
    const[createview,setCreateview]=useState(false)
    const[readview,setReadview]=useState(false)
    const[pos,setPos]=useState(0)
    const[updateview,setUpdateview]=useState(false)
    const[obj,setObj]=useState({})
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
                (readview)?
                <>
                <Reading who={pos} />
                <button className="btn btn-outline-secondary" onClick={
                    ()=>
                    {
                        setReadview(false)
                    }
                }>
                    Back
                </button>
                </>
                :
                (updateview)?
                <>
                <Updating who={pos} mention={obj} />
                <button className="btn btn-outline-secondary" onClick={
                    ()=>
                    {
                        setUpdateview(false)
                    }
                }>
                    Back
                </button>
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
                <div className="row justify-content-center">
                    <div className="table-responsive-md">
                        <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4 ">
                            <thead>
                                <tr>
                                    <th>CustomerId </th>
                                    <th>CustomerName</th>
                                    <th>CustomerEmail</th>
                                    <th>CustomerContact</th>
                                    <th>CustomerDate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    temparray.map((ele,ind)=>
                                    (
                                        <tr>
                                            <td>{ele.cusId}</td>
                                            <td>{ele.cusName}</td>
                                            <td>{ele.cusEmail}</td>
                                            <td>{ele.cusContact}</td>
                                            <td>{ele.cusDate}</td>
                                            <td>
                                                <button className="btn btn-outline-primary" onClick={
                                                    ()=>
                                                    {
                                                        setReadview(true);
                                                        setPos(ind)
                                                    }
                                                }>
                                                    READ
                                                </button>
                                                <button className="btn btn-outline-warning" onClick={
                                                    ()=>
                                                    {
                                                        setUpdateview(true)
                                                        setPos(ind);
                                                        setObj(FetchExact(ele.cusName));
                                                    }
                                                }>
                                                    UPDATE
                                                </button>
                                                <button className="btn btn-outline-danger" onClick={
                                                    ()=>
                                                    {
                                                        setTemparray(remove(ind))
                                                    }
                                                }>
                                                    DELETE
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>

                    </div>

                </div>
                </>
            }

        </div>
        </>
    )
}