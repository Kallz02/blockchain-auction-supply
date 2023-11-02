import { useState } from "react";

export default ({

  setCreateShipmentModel,
  createShipmentModel,
  createShipment
})=>{

  const [shipment,setShipment]=useState({
    reciever:"",
    pickupTime:"",
    distance:"",
    price:"",
  });

  const createItem = async ()=>{
    try{
      await createShipment(shipment);
  
    }catch(error){
      console.log(error);
    }

  }

  return createShipmentModel ? (
    <div className="fixed z-10 inset-0 overflow-y-auto">
     <div className="fixed inset-0 w-full h-full bg-black opacity-40"
     onClick={()=>setCreateShipmentModel(false)}
     >
      CLOSE
      
      </div> 
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
          <button className="text-gray-600 p-2 rounded-md hover:text-gray-800" onClick={()=>setCreateShipmentModel(false)}>
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
          <h4 className="">
            Track Prodcut , Create Shipment
          </h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="relative mt-3">
                <input type="text" placeholder="Reciever" className="w-full pl-5 pr-3 py-2 text-gray-500 outline-none  border focus:border-indigo-600 shadow-sm rounded-lg  bg-transparent" 
                onChange={(e)=>setShipment({...shipment,reciever:e.target.value})}
                />
              </div>
              <div className="relative mt-3">
                <input type="date" placeholder="Pickup Time"  className="w-full pl-5 pr-3 py-2 text-gray-500 outline-none  border focus:border-indigo-600 shadow-sm rounded-lg  bg-transparent"
                onChange={(e)=>setShipment({...shipment,pickupTime:e.target.value})}
                />

              </div>
              <div className="relative mt-3">
                <input type="text" placeholder="Distance"  className="w-full pl-5 pr-3 py-2 text-gray-500 outline-none  border focus:border-indigo-600 shadow-sm rounded-lg  bg-transparent"
                onChange={(e)=>setShipment({...shipment,distance:e.target.value})}
                />
                </div>
                <div className="relative mt-3">
                <input type="text" placeholder="Price"  className="w-full pl-5 pr-3 py-2 text-gray-500 outline-none  border focus:border-indigo-600 shadow-sm rounded-lg  bg-transparent"
                onChange={(e)=>setShipment({...shipment,price:e.target.value})}
                />
                </div>
                <div className="relative mt-3">
                <button onClick={()=>createItem()} className="w-full py-3 mt-3 px-4 font-medium text-sm tet-center text-white bg-indigo=600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offdet-2 ring-indigo-600 focus:ring-2">Create Shipment</button>
                </div>

            </form>
        </div>
      </div>
      
      </div>):("")

}