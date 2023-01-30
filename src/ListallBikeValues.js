import './Image.css'
export const ListallbikeDetails=()=>
{
    return(
                <>
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
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}