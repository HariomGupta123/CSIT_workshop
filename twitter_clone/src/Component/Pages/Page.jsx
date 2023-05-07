import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../NavBar";
import Home from "./Home";
import SingleTweet from "./Singletweet";
const Page=()=>{
    return<>
    <NavBar/>
    <BrowserRouter>
        
        <Routes>
            <Route path="/home" element={<Home/>}/>
             <Route path="/tweet/:id" element={<SingleTweet/>}/> 
        </Routes>
    </BrowserRouter>
       
    </>
}
export default Page;