import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { readNum, serviceadding } from "./Connect";


export const Newservicedetail=()=>
{
    const nav=useNavigate()
    const[process,setProcess]=useState({
        "bikeJobcardno":0,
        "bikeissues":[],
        "bikeDateofservice":"",
        "bikeKilometer":0,
        "bikestatus":"",
        "bikeTypeofservice":"",
        "bikeEstimatecharge":0,
        "bikeNewproductcost":0,
        "bikeLabourcharge":0,
        "bikeFinalpay":0,
        "bikeDetails1":""
    })
    const[isu,setIsu]=useState("")
    const tracking=(e)=>{
        setIsu(e.target.value)
    }
    const regis=async()=>
    {
        const b = await readNum(process.bikeDetails1);
        process.bikeDetails1=b.data;
        process.bikeissues=isu.split(",");
        const yet=await serviceadding(process);
        alert(yet.data);
        nav("/listallservicedetails");
    }
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    return(
        <>
         <div id="servicebg">
            <span id="service"></span>
         <div className="container"  >
                <h1 className="text-center  fs-5 mt-5" id="texting" >New ServiceDetails Generated</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9 col-sm-12 p-4 shadow-lg rounded-5">
                        <div className="form group">
                            <label>BikeJobcardNumber</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Automatic"  
                            onChange={track}
                            value={process.bikeJobcardno}
                            name="bikeJobcardno"
                            />
                        </div>
                        <div className="form group">
                            <label>BikeIssues </label>
                            <input type="text" 
                            placeholder="Problems" 
                            onChange={tracking}
                            value={isu}
                            className="form-control" 
                            name="isu" />
                        </div>
                        <div className="form group">
                            <label>BikeDateofService </label>
                            <input type="date" 
                            placeholder="yyyy-mm-dd" 
                            onChange={track}
                            value={process.bikeDateofservice}
                            className="form-control" 
                            name="bikeDateofservice"  />
                        </div>
                        <div className="form group">
                            <label>BikeKilometer </label>
                            <input type="number" 
                            placeholder="2334566" 
                            className="form-control" 
                            onChange={track}
                            value={process.bikeKilometer}
                            name="bikeKilometer"  />
                        </div>
                        <div className="form group">
                            <label>BikeStatus</label>
                            <input type="text" 
                            placeholder="approved/Success/Process" 
                            className="form-control"
                            onChange={track}
                            value={process.bikestatus} 
                            name="bikestatus"  />
                        </div>
                        <div className="form group">
                            <label>BikeTypeofservice </label>
                            <input type="text" 
                            placeholder="Paid/free" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeTypeofservice} 
                            name="bikeTypeofservice"  />
                        </div>
                        <div className="form group">
                            <label>bikeEstimatecharge </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeEstimatecharge} 
                            name="bikeEstimatecharge"  />
                        </div>
                        <div className="form group">
                            <label>bikeNewproductcost </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeNewproductcost} 
                            name="bikeNewproductcost"  />
                        </div>
                        <div className="form group">
                            <label>BikeLabourcharge </label>
                            <input type="number" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeLabourcharge} 
                            name="bikeLabourcharge"  />
                        </div>
                        <div className="form group">
                            <label>BikeFinalPay </label>
                            <input type="number" 
                            placeholder="Sample" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeFinalpay} 
                            name="bikeFinalpay"  />
                        </div>
                        <div className="form group">
                            <label>BikeDetails</label>
                            <input type="text" 
                            placeholder="salary for employee" 
                            className="form-control"
                            onChange={track}
                            value={process.bikeDetails1} 
                            name="bikeDetails1"  />
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button className="btn btn-outline-info col-2" onClick={regis} >
                                Added ServiceDetails
                                <i class="bi bi-database-add"></i>
                            </button>
                            <button className="btn btn-outline-dark col-2" type="reset" value="Cancel">
                                Cancelled ServiceDetails
                                <i class="bi bi-x-octagon-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}