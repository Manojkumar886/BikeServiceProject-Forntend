import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { displayall, onremoving, removing } from './Connect';
import './Image.css'
export const ListallbikeDetails=()=>
{
    const navi=useNavigate()
    const[allbikedetails,setAllbikedetails]=useState([]);

    const loadingRecords=async()=>{
        
        const t = await displayall()
        setAllbikedetails(t.data)
    }

    useEffect(()=>
    {
     loadingRecords()   
    })
    return(
                <>
                    <div className="container mt-5">
                        
                    <div className="Container mt-5 bg-warning" >
                    <div className="row justify-content-center">
                                <div className="table-responsive-md">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                        <thead id="texting">
                                            <tr>
                                                <th>customerId</th>
                                                <th>customerBikeNo</th>
                                                <th>CustomerName</th>
                                                <th>CustomerContact Number</th>
                                                <th>CustomerEmail Id</th>
                                                <th>Dateofpurchase</th>  
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allbikedetails.map((data)=>
                                                (
                                                    <tr>
                                                        <td >
                                                            <a 
                                                            href={`/reading/${data.cusId}`}
                                                             className="btn btn-dark">
                                                                {data.cusId}
                                                            </a>
                                                        </td>
                                                        <td>{data.cusBikeno}</td>
                                                        <td>{data.cusName}</td>
                                                        <td>{data.cusContactno}</td>
                                                        <td>{data.cusEmail}</td>
                                                        <td>{data.Dateofpurchase}</td>
                                                        <td>
                                                            <a 
                                                            href={`/updateby/${data.cusId}`} className="btn btn-outline-info">
                                                                Update
                                                            </a>
                                                          
                                                           
                                                            <button className="btn btn-outline-danger" onClick={async()=>{
                                                                const tmp = await onremoving(data.cusId)
                                                                alert(tmp.data)
                                                                navi("/listallbikedetails")
                                                            }}>
                                                                Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
 
                    </div>

                </>
            );
}