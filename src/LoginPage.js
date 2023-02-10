import { useState } from "react"

export const Login=()=>
{

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
            <>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow-lg">
                            <div className="form group">
                                <label>Username</label>
                                <input type="text" onChange={onPerform} value={user.username} name="username" placeholder="Username please" className="form-control" />
                            </div>
                            <div className="form group">
                                <label>Password</label>
                                <input type="password" onChange={onPerform} value={user.password} name="password" placeholder="Password please" className="form-control" />
                            </div>
                            <div className="row justify-content-around mt-3">
                                <button className="col-3 btn btn-outline-primary" onClick={async()=>{
                                   if(user.username==="razak" && user.password==="mohamed"){
                                    sessionStorage.setItem("auth",user.username);
                                    window.location.assign("/")
                                   }
                                   else{
                                    alert("invaild values")
                                   }
                                }}>
                                    <i class="bi bi-box-arrow-in-right"></i>Login
                                </button>
                                <button className="col-3 btn btn-outline-dark" type="reset">
                                    <i class="bi bi-x-circle-fill"></i>Cancel
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}