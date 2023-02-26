import { useEffect, useState } from 'react';
import { displayallservice} from './Connect';
import './Image.css'
export const ListallbServiceDetails=()=>
{
    
    const[allbikedetails,setAllbikedetails]=useState([]);

    const loadingRecords=async()=>{
        
        const t = await displayallservice();
        setAllbikedetails(t.data)
    }

    useEffect(()=>
    {
     loadingRecords()   
    })
    return(
                <>
                <div className="container-fluid mt-5 bg-warning " >
                    <div className="row justify-content-center">
                                <div className="table-responsive">
                                    <table className="col-lg-6 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                        <thead id="texting">
                                            <tr>
                                                <th>bikeJobcardno</th>
                                                <th>bikeIssues</th>
                                                <th>bikeDateofservice</th>
                                                <th>bikeKilometer</th>
                                                <th>bikeStatus</th>
                                                <th>bikeTypeofservice</th>
                                                <th>bikeEstimatecharge</th>  
                                                <th>bikeNewproductcost</th>
                                                <th>bikeLabourcharge</th>
                                                <th>bikeFinalpay</th>
                                                <th>bikeDetails ID</th>
                                                <th>Performance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                allbikedetails.map((data)=>
                                                (
                                                    <tr>
                                                        <td>
                                                        <a 
                                                            href={`/readingservice/${data.bikeJobcardno}`}
                                                             className="btn btn-dark">
                                                                {data.bikeJobcardno}
                                                            </a></td>
                                                        <td>{data.bikeissues}</td>
                                                        <td>{data.bikeDateofservice}</td>
                                                        <td>{data.bikeKilometer}</td>
                                                        <td>{data.bikestatus}</td>
                                                        <td>{data.bikeTypeofservice}</td>
                                                        <td>{data.bikeEstimatecharge}</td>
                                                        <td>{data.bikeNewproductcost}</td>
                                                        <td>{data.bikeLabourcharge}</td>
                                                        <td>{data.bikeFinalpay}</td>
                                                        <td>
                                                            {data.bikeDetails1.cusId}
                                                        </td>
                                                        <td>
                                                        <a 
                                                            href={`/updatebyservice/${data.bikeJobcardno}`}
                                                             className="btn btn-dark">
                                                                Update
                                                            </a>
                                                            
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}