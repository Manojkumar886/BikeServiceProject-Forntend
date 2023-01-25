import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./BikeServiceForm";
import { Updating } from "./BikeUpdatePage";
import {  Homepage } from "./PageinHome";



function App() {
  return (
    <>
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="create" exact element={<Register/>} />
      <Route path="update" exact element={<Register/>}/>
      <Route />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
