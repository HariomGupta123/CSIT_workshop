import React from "react";
import "./App.css"
import Tweet from "./Component/Tweet";
import Header from "./Component/Header";
import TwitterBody from "./Component/TwitterBody";
import Footer from "./Component/Footer";
import Ecomerse from "./Component/FirstDay/Ecomerse";
const App=()=>{
  return<>
      
      <Tweet name={"niraj"} lastName={"@gupta"}/>
      <Tweet name={"aarif"} lastName={"@prajuli"}/>
      <div className="Ecomerse">
      <Ecomerse title={"t-shirt"} img={"https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg" } size={"large"} color={"red"} price={400}/>
      <Ecomerse title={"shoe"} img={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" } size={"madium"} color={"red"} price={1000}/>
      <Ecomerse title={"jocket"} img={"https://wikimetal.info/wp-content/uploads/2020/04/Black-leather-jacket-for-men-1.jpg"} size={"small"} color={"black"} price={3000}/>
      </div>
      

  </>
  
}
export default App;