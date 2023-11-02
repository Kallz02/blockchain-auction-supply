import React from "react";
import { useEffect, useState, useContext } from "react";
import Nav1 from "./SVG/Nav1"
import Nav2 from "./SVG/Nav2"
import Nav3 from "./SVG/Nav3"
import { TrackingContext } from "../Conetxt/Tracking";
import Link from "next/link";
const NavBar = () => {
  const [state, setState] = useState(false);
  const {CurrentUser,connectWallet } =useContext(TrackingContext)
  const navigation =[
    {title:"Home",path:"/"},
    {title:"Services",path:"/"},
    {title:"Contact Us",path:"/"},
    {title:"Erc20",path:"/"}


  ] 
  
  useEffect(() => {
    document.onclick=(e)=>{
      const target =e.target;
      if(!target.closest(".menu-btn")) setState(false)
    }
  },[])


  
  return (<>
    <nav className={`bg-white pb-5 md:text-sm
      ${state? "shadow-lg rounded-xl mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0":""}`}
>
  <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
<div className="flex  items-center justify-between py-5 md:block ">
<Link className="text-lg" href={"/"}>
Logo

</Link>
<button className="menu-btn hover:text-gray-800 text-gray-500 md:hidden" onClick={()=>setState(!state)}>
    {state ? <Nav1/>:<Nav2/>}
</button>


</div>

  <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
    state?"block":"hidden"
  }   `}>
    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
      {navigation.map((item,index)=>(
        <li className="text-gray-700 hover:text-gray-900" key={index}>
          <Link href={item.path} className="block text-gray-500 hover:text-gray-800 ">
              {item.title}
          </Link>
        </li>
      ))}
      <div className="flex-1 gap-x-6 items-center justoify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
        {CurrentUser  ? (
          <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white 
          font-medium bg-gray-800 active:bg-gray-900 rounded-full md:inline-flex hover:bg-gray-700">
{CurrentUser.slice(0,25)}..
</p>        ):(
  <button onClick={()=> connectWallet()}
  className="flex items-center rounded-full md:inline-flex justify-content gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
>
Connect Wallet
<Nav3/>
</button>)}
      </div>

    </ul>

  </div>
  </div>
  
  
  </nav>  
  
  </>);
};

export default NavBar;
