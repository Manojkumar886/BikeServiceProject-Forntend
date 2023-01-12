let BikeCustomers=[
    {
        "cusId":"TN34V5063",
        "cusName":"Madheswaran",
        "cusContact":9715255930,
        "cusEmail":"madheswaranmadhu12@gmail.com",
        "cusDate":"21-2-2012"
    },
    {
        "cusId":"TN91H1991",
        "cusName":"Annamalai",
        "cusContact":7069696856,
        "cusEmail":"s.annamalai@gmail.com ",
        "cusDate":"21-06-2021"
    },{
        "cusId":"TN34S2321",
        "cusName":"Manojkumar   ",
        "cusContact":9789355930,
        "cusEmail":"manoj12@gmail.com",
        "cusDate":"22-02-2023"
    }
]


export const create=(data)=>
{
    BikeCustomers.push(data)
}

export const list=()=>
{
    return BikeCustomers;
}