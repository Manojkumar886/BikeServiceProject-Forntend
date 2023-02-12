import axios from "axios";

const url="http://localhost:8080"

export const adding=async(object)=>{
    const t = await axios.post(`${url}/newbike`,object)
    alert(JSON.stringify(t.data)+"has been added in backend")   
    return t;
}

export const serviceadding=async(object)=>{
    const temp=await axios.post(`${url}/newservice`,object)
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
    const t = await axios.get(`${url}/fetch/${nm}`)
    return t;
}