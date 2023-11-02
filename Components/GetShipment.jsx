import { useState } from "react";

export default ({getModal , setGetModal ,getShipment})=>{
    const [index,setIndex]=useState(0);
    const[singleShipment,setSingleShipment]=useState();

    const getSingleShipment = async()=>{
        try{
            const shipment = await getShipment(index);
            setSingleShipment(shipment);
        }catch(err){
            console.log("error in getting shipment",err);
        }
    }
    const coverTime =(time)=>{
      const newTime = new Date(time);
      const dateTime= new Intl.DateTimeFormat("en-US", {
        year:"numeric",
        month:"2-digit",
        day:"2-digit",
      }).format(newTime)
   
   
    return dateTime
    
  }

  return getModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
<div className="fixed inset-0 h-full w-full bg-black opacity-40" onClick={()=>setGetModal(false)}></div>
<div className="flex items-center min-h-screen px-4 py-8 ">
  <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
    <div className="flex justify-end">
      <button className="p-2 text-gray-400 tounded-md hover:text-gray-800" onClick={()=>setGetModal(false)}>
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
        Product Tracking Details
      </h4>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="number" placeholder="Enter Shipment Id" className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500" onChange={(e)=>setIndex(e.target.value)}/>
        <button className="w-full mt-4 py-2 text-white bg-blue-500 rounded-md" onClick={()=>getSingleShipment()}>Get Details</button>
        
        </form>
        {singleShipment==undefined?null:
        (<div className="text-left">
          <p>Sender : {singleShipment.sender.slice(1,25)}</p>
          <p>Reciever : {singleShipment.receiver.slice(1,25)}</p>
          <p>PickupTime : {singleShipment.pickupTime}</p>  
          <p>DeliveryTime : {singleShipment.deliveryTime}</p>
          <p>Distance : {singleShipment.distance}</p>
          <p>Price : {singleShipment.price}</p>
          <p>Status : {singleShipment.status}</p>

          <p>Paid : {singleShipment.isPaid?"Completed":"Not Completed"}</p>
        </div>)
          }
    </div>
  </div>
</div>
    </div>):null
}
