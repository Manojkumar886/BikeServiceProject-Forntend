import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reading } from "./BikeReadPage";
import { Register01 } from "./BikeServiceForm";
import { Updating } from "./BikeUpdatePage";
import { ListallbikeDetails } from "./ListallBikeValues";
import { ListallbServiceDetails } from "./ListallServiceDetails";
import { Login } from "./LoginPage";
import { Newservicedetail } from "./NewserviceDetails";
import {  Homepage } from "./PageinHome";
import { Readingservice } from "./ServiceReadPage";
import { Updateservicedetail } from "./serviceupdatepage";



function App() {
  return (
    <>
    {
      (sessionStorage.getItem("user"))?
      <>
      <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="createbikedetails" exact element={<Register01/>}/>
      <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetail" exact element={<Newservicedetail/>} />
      <Route path="listallservicedetails" exact element={<ListallbServiceDetails/>}/>
      <Route path="/reading/:myid" exact element={<Reading/>} />
      <Route path="/readingservice/:myjobcard" exact element={<Readingservice/>}/>
      <Route path="updateby/:id" exact element={<Updating/>} />
      <Route path="updatebyservice/:jobcard" exact element={<Updateservicedetail/>}/>
      <Route />
    </Routes>
    </BrowserRouter>
      </>
      :<><Login/></>
    }
    </>
  );
}

export default App;
