import { useState } from "react"
<<<<<<< HEAD

export const Login=()=>
{

=======
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CancelIcon from '@mui/icons-material/Cancel';
import Person3Icon from '@mui/icons-material/Person3';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const Login=()=>
{
>>>>>>> fe94450340523d213154dc454a1bb85f0cbbc02f
    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onPerform=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    return(
<<<<<<< HEAD
            <>
=======
        <>
>>>>>>> fe94450340523d213154dc454a1bb85f0cbbc02f
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow-lg">
                            <div className="form group">
                                <label><Person3Icon></Person3Icon> Username</label>
                                <input type="text" 
                                onChange={onPerform} 
                                value={user.username} 
                                name="username" 
                                placeholder="Username please" 
                                className="form-control" />
                            </div>
                            <div className="form group">
                                <label><VpnKeyIcon></VpnKeyIcon> Password</label>
                                <input type="password" 
                                onChange={onPerform} 
                                value={user.password} 
                                name="password" 
                                placeholder="Password please" 
                                className="form-control" />
                            </div>
                            <div className="row justify-content-around mt-3">
<<<<<<< HEAD
                                <button className="col-3 btn btn-outline-primary" onClick={async()=>{
                                   if(user.username==="razak" && user.password==="mohamed"){
                                    sessionStorage.setItem("auth",user.username);
                                    window.location.assign("/")
                                   }
                                   else{
                                    alert("invaild values")
                                   }
=======
                                <button className="col-3 btn btn-outline-primary" onClick={()=>
                                {
                                    if(user.username==="MANOJKUMAR" && user.password==="manoj123")
                                    {
                                        sessionStorage.setItem("auth",user.username)
                                        window.location.assign("/")
                                    }
                                    else{
                                        alert("invalid values")
                                    }
>>>>>>> fe94450340523d213154dc454a1bb85f0cbbc02f
                                }}>
                                    <LockOpenIcon></LockOpenIcon> Login
                                </button>
                                <button className="col-3 btn btn-outline-dark" type="reset">
                                    <CancelIcon></CancelIcon>Cancel
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}