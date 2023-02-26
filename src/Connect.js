import axios from "axios";
import { json } from "react-router-dom";

const url="http://localhost:8080/api"

export const onSubmitLogin=async(object)=>{
    const credentials=object.username+":"+object.password
    const tok=btoa(credentials)
    try{
        const t = await axios.get(`http://localhost:8080/api/ListingBikeDetails`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return;
        }
    }
    catch(err){
        alert(err)
    }
}
export const adding=async(object)=>{
    const t = await axios.post(`${url}/newbike`,object)
    alert(JSON.stringify(t.data)+"has been added in backend")   
    return t;
}

export const serviceadding=async(object)=>{
    alert(JSON.stringify(object))
    const temp=await axios.post(`${url}/newservice`,object)
    alert(JSON.stringify(temp.data)+"has been added in backend") 
    return temp;
}

export const displayall=async()=>{
    const t = await axios.get(`${url}/ListingBikeDetails`)
    return t;
}

export const displayallservice=async()=>{
    const t = await axios.get(`${url}/Listingservicedetails`)
    return t;
}
export const updatebike=async(object)=>
{
    const t=await axios.put(`${url}/update`,object)
    return t;
}
export const updateservice=async(object)=>
{
    const t=await axios.put(`${url}/updateservice`,object)
    return t;
}

export const onremoving=async(keys)=>
{
    const t=await axios.delete(`${url}/Delete/${keys}`)
    return t;
}

export const readone=async(ids)=>
{
    const t=await axios.get(`${url}/Listone/${ids}`)
    return t;
}

export const readoneservice=async(jobcards)=>
{
    const t=await axios.get(`${url}/onelist/${jobcards}`)
    return t;
}

export const readNum=async(nm)=>{
    const t = await axios.get(`${url}/fetch/${nm}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t;
}