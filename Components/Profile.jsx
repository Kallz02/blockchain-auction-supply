import { useState , useEffect } from "react";
import Image from "next/image";

import images from "../Images/index";

export default ({ openProfile,setOpenProfile,currentUser,getShipmentsCount})=>{
  const [count ,setCount]=useState();
  useEffect(()=>{
    const getCount = async()=>{
      const count = await getShipmentsCount();
      setCount(count);
    }
    getCount();
  },[])

  return openProfile?(<div className="fixed z-10 inset-0 overflow-y-auto">
    
    <div className="fixed inset-0 w-full h-full bg-black opacity-40"
    onClick={()=>setOpenProfile(false)}
    ></div>
    <div className="flex items-center min-h-screen px-4 py-8 ">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-400 tounded-md hover:text-gray-800" onClick={()=>setOpenProfile(false)}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mx-auto"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
            </button>
        </div>
        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
          <h4 className="text-lg font-medium text-gray-800">
            Profile
          </h4>
          <div className="relative">
            <Image src={images.avatar} alt="profile" width={100} height={100} className="rounded-full"/>
          </div>
          <div className="relative">
            <p className="text-lg font-medium text-gray-800">{currentUser}</p>
            <p className="text-sm text-gray-500">Shipment Count : {count}</p>
          </div>
          </div>

    </div>
    </div>
    </div>
    ):null
}