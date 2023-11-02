import { useState } from "react";

import Str1 from "./SVG/Str1";

export default ({startModal,setStartModal,startShipment})=>{
const [getProduct,setGetProduct]=useState({
  receiver:"",
  index:"",
});
const startShiping =()=>{
  startShipment(getProduct);
}

return startModal ? (

<div className="fixed z-10 inset-0 overflow-y-auto">
<div className="fixed inset-0 w-full h-full bg-black opacity-40"
onClick={()=>setStartModal(false)}
></div>
<div className="flex items-center min-h-screen px-4 py-8 ">
  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
    <div className="flex justify-end">
      <button className="p-2 text-gray-400 tounded-md hover:text-gray-800" onClick={()=>setStartModal(false)}>
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
        Start The Shipping
      </h4>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="relative mt-3">
          <input type="text" placeholder="Enter Receiver Address" className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500" onChange={(e)=>setGetProduct({...getProduct,receiver:e.target.value})}/>
        
        </div>
        <div className="relative mt-3">
          <input type="number" placeholder="Enter Product Id" className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500" onChange={(e)=>setGetProduct({...getProduct,index:e.target.value})}/>

        </div>

        <button className="w-full mt-4 py-2 text-white bg-blue-500 rounded-md" onClick={()=>startShiping()}>Start Shipping</button>



      </form>
    </div>
    </div>
    </div>
</div>  ):null

}