import { useState } from "react";
import axios from "axios";
import Login from "../auth/login";
import Register from "../auth/register";
import AddProduct from "../product/addproduct";
import Editpage from "../product/editproduct";
import Home from "../home/homepage";
import DetailPage from "../product/detailproduct";
import { BrowserRouter,Route,Routes,NavLink,Link } from "react-router-dom";
import { useEffect } from "react";
const Routess=()=>{
    return(
        <div className="router">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/addproduct"  element={<AddProduct/>}/>
                    <Route path="/editproduct/:id"  element={<Editpage/>}/>
                    <Route path="/detailpage/:id"  element={<DetailPage/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/register"  element={<Register/>}/>

                </Routes>
            </BrowserRouter>
        </div>  
    )
}
export default Routess