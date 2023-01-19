let Bikevalues=[
    {
        "cusId":"TN34v5063",
        "cusName":"Manojkumar",
        "cusContact":9876543476,
        "cusEmail":"manojgeetha12.10@gmail.com",
        "cusDate":"23-03-2022"
    },
    {
        "cusId":"TN45GH8978",
        "cusName":"Thilak",
        "cusContact":9876545687,
        "cusEmail":"thilk123@gmail.com",
        "cusDate":"12-01-2022"
    },
    {
        "cusId":"KL23AB5456",
        "cusName":"Sugan",
        "cusContact":3456788765,
        "cusEmail":"suganrajan@gmail.com",
        "cusDate":"03-08-2021"
    }
]

export const create=(data)=>
{
    Bikevalues.push(data)
}

export const list=()=>
{
    return Bikevalues;
}
export const read=(index)=>
{
    return Bikevalues[index];
}